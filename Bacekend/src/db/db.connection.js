import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

export const connectDataBase = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URL}/${DB_Name}`,
    );
  } catch (error) {
    console.log("MongoDB connection Failed:", error);
  }
};
