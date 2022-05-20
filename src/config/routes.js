import express from "express";
import userRoutes from "../routes/userRoutes";

const routes = express.Router();

routes.use("/user", userRoutes);
//routes.use("/tienda", tiendaRoutes);

export default routes;
