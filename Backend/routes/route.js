import express from "express";
import { Createuser } from "../controller/userController.js";

const routers = express.Router();

routers.post("/create-user", Createuser);

export default routers;
