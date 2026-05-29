import { pdfStructurerPrompt } from "../constant.js";
import { aiCall } from "../config/ai.config.js";

export const getStructureTextFromPdf = async (userPrompt) => {
  const baseMessage = [
    { role: "system", content: pdfStructurerPrompt },
    { role: user, content: userPrompt },
  ];
  const { rawText, parsedText } = await aiCall(baseMessage);

  return { parsedText };
};
