import { Response, Request } from "express";
import * as messagesServices from "../services/messagesService.js";

export async function addMessage(req: Request, res: Response) {

    const message = req.body;

    console.log(message)

    await messagesServices.addMessageService(message);
    res.sendStatus(200);
}

export async function getMessages(req: Request, res: Response) {

    const messages = await messagesServices.getMessagesService();
    
    res.send(messages);
}

export async function removeMessage(req: Request, res: Response) {

    const messageId  = req.params.id;
  
    await messagesServices.removeMessageService(messageId)
  
    res.sendStatus(200)
}

export async function markAsRead(req: Request, res: Response) {

    const messageId  = req.params.id;
    const readValue = req.body.value;
    const value = await messagesServices.setReadValue(readValue);
  
    await messagesServices.markAsReadService(messageId, value);
  
    res.sendStatus(200)
}

