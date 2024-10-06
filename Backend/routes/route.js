import express from "express";
import {
  Createuser,
  GetUser,
  UpdateUser,
} from "../controller/userController.js";

const routers = express.Router();

routers.post("/create-user", Createuser);
routers.get("/get-user", GetUser);
routers.put("/update-user/:id", UpdateUser);

export default routers;
