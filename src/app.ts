import express from "express";
import { RegisterRoutes } from "./routes";

const app = express();

RegisterRoutes(app);

app.listen(3000, () => {
  console.log("Started");
});
