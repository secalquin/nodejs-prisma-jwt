import express from "express";
import morgan from "morgan";
import responseTime from "response-time";
import routes from "./src/config/routes";

import "dotenv/config";

const app = express();

//Settings
const PORT = process.env.SERVER_PORT || 8081;

//Middlewares
app.use(express.json()); //FORMAT JSON AUTO
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use(responseTime());

//Route
app.use("/api/v1", routes);

// Starting the server
app.listen(PORT, async () => {
  console.log("Server on port ", PORT);
});

module.exports = app;
