import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

export const connectDataBase = async () => {
  try {
    console.log("DB_URL", process.env.DB_URL);
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URL}/${DB_Name}`,
    );
    console.log(`✅ DB connected | Host: ${connectionInstance.connection}`);
    console.log("Mongoose state:", mongoose.connection.readyState);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // 👈 CRITICAL — kill the process so queries don't buffer forever
  }
};
