import cookieParser from "cookie-parser";
import cors from "cors";
import express, { json, urlencoded } from "express";

export const app = express();

app.use(cookieParser());

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

app.use(urlencoded({ extended: true, limit: "15kb" }));

app.use(urlencoded({ extended: true }));

app.use(json());

import userRouter from "./routes/user.routes.js";
import resumeRoutes from "./routes/resume.routes.js";
import resumeFeedbackRouter from "./routes/resumeFeedback.routes.js";
// import { User } from "./models/user.model.js";

// app.get("/test-db", async (req, res) => {
//   try {
//     const count = await User.countDocuments();
//     res.json({ success: true, count });
//   } catch (err) {
//     res.json({ success: false, error: err.message });
//   }
// });

app.use("/api/v1/users", userRouter);

app.use("/api/v1/resumes", resumeRoutes);

app.use("/api/v1/feedback", resumeFeedbackRouter);
