import express from "express";
import { HelloWorld } from "../controllers/userController";

const routes = express.Router();

routes.use("/", HelloWorld);
//routes.use("/tienda", tiendaRoutes);

export default routes;
