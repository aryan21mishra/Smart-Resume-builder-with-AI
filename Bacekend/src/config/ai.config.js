import { Groq } from "groq-sdk";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const aiCall = async (baseMessage) => {
  const chatCompletion = await groq.chat.completions.create({
    messages: baseMessage,
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    temperature: 1,
    max_completion_tokens: 1024,
    top_p: 1,
    stream: false,
    stop: null,
  });
  const rawText = chatCompletion.choices[0]?.message?.content;

  const cleanedText = rawText
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return {
    rawText,
    parsedText: JSON.parse(cleanedText),
  };
};
