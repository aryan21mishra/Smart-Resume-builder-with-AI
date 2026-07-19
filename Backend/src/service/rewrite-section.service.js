import { RewriteSection } from "../models/rewrite-section.model.js";

export const createRewriteSection = (credentials) => {
  return RewriteSection.create(credentials);
};
