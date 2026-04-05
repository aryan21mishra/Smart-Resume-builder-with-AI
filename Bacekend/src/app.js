import cookieParser from "cookie-parser";
import cors from "cors";
import express, { json, urlencoded } from "express";

export const app = express();

app.use(cookieParser());

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

app.use(urlencoded({ extended: true, limit: "15kb" }));

app.use(urlencoded({ extended: true }));

app.use(json());

import userRoutes from "./routes/user.routes.js";

app.use("/api/v1/users", userRoutes);
