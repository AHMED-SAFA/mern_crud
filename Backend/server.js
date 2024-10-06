import express from "express";
import dbConnection from "./utils/db.js";
import dotenv from "dotenv";
import cors from "cors";
import routers from "./routes/route.js";

const app = express();

dotenv.config();
dbConnection();

app.use(express.json());
app.use(cors());

app.use("/api", routers);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 4000");
});
