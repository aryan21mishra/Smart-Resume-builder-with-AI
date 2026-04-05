import cookieParser from "cookie-parser";
import cors from "cors";
import express, { json, urlencoded } from "express";

export const app = express();

app.use(cookieParser());

app.use(cors());

app.use(urlencoded({ extended: true, limit: "15kb" }));

app.use(urlencoded({ extended: true }));

app.use(json());
