import express from "express";
import cors from "cors";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import scheduleRouter from "./routers/scheduleRouter.js";
import messagesRouter from "./routers/messagesRouter.js";
import membersRouter from "./routers/membersRouter.js";
import authRouter from "./routers/authRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(scheduleRouter);
app.use(messagesRouter);
app.use(membersRouter);
app.use(authRouter);
app.use(errorHandlerMiddleware);

export default app;
