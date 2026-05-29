import { aiCall } from "../config/ai.config.js";
import { systemPrompt } from "../constant.js";

export const getResumeAtsScoreFromAi = async (messages) => {
  const baseMessage = [{ role: "system", content: systemPrompt }, ...messages];
  const { rawText, parsedText } = await aiCall(baseMessage);
  return { rawText, parsedText };
};
