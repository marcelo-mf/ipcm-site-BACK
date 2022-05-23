import { Router } from "express";
import { addMessage, getMessages, markAsRead, removeMessage } from "../controllers/messagesController.js";

const messagesRouter = Router();

messagesRouter.post("/addMessage", addMessage);
messagesRouter.get("/getMessages", getMessages);
messagesRouter.delete("/removeMessage/:id", removeMessage);
messagesRouter.put("/markAsRead/:id", markAsRead);

export default messagesRouter;
