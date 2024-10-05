import express from "express";
import dbConnection from "./db.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();
dbConnection();

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 4000");
});
