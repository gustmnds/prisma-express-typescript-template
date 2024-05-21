import "express-async-errors";
import express from "express";
import { appRoutes } from "./routes";
import { WebErrorMiddleware } from "./middlewares/web-error.middleware";

const server = express();

server.use(express.json());
server.use(appRoutes);
server.use(WebErrorMiddleware);

export { server };