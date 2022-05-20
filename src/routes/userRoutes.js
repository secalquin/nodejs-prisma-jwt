import express from "express";
import { HelloWorld } from "../controllers/user/userController";

const routes = express.Router();

routes.use("/", HelloWorld);

export default routes;
