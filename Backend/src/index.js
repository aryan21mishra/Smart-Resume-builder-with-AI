import { app } from "./app.js";
import { connectDataBase } from "./db/db.connection.js";
import dotenv from "dotenv";


dotenv.config({
  path: "./.env",
});

await connectDataBase()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed", error);
  });
