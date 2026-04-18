import { Groq } from "groq-sdk";
import { systemPrompt } from "../constant";

const groq = new Groq();

export const callAI = async (messages) => {
  const baseMessage = [{ role: "system", content: systemPrompt }, messages];
  const chatCompletion = await groq.chat.completions.create({
    messages: baseMessage,
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    temperature: 1,
    max_completion_tokens: 1024,
    top_p: 1,
    stream: false,
    stop: null,
  });
  return {
    rawText: chatCompletion.choices[0]?.message?.content,
    parsedText: JSON.parse(chatCompletion.choices[0]?.message?.content),
  };
};
