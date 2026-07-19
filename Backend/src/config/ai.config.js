import { Groq } from "groq-sdk";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
export const aiCall = async (baseMessage) => {
  const chatCompletion = await groq.chat.completions.create({
    messages: baseMessage,
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    temperature: 1,
    top_p: 1,
    stream: false,
    stop: null,
  });
  const rawText = chatCompletion.choices[0]?.message?.content || ""
  console.log(rawText, "rawText");
  const cleanedText = rawText
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .replace("Here is the parsed JSON object:", "")
    .trim();
  console.log(cleanedText, "cleanedText");

  return {
    rawText,
    parsedText: JSON.parse(cleanedText),
  };
};
