import { PDFParse } from "pdf-parse";

export const pdfExtractor = async (path) => {
  const parser = new PDFParse({ url: path });

  const result = await parser.getText();

  const cleaned = result.text
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/•|▪|◦|→|▸/g, "-")
    .trim();

  return cleaned;
};
