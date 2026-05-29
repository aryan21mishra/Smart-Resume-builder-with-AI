import { PDFParse } from "pdf-parse";

export const pdfExtractor = async (path) => {
  const parser = new PDFParse({ url: path });

  const result = await parser.getText();
  return result.text;
};
