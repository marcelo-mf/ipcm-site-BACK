import { Response, Request } from "express";
import * as scheduleServices from "../services/scheduleService.js";

export async function getSchedule(req: Request, res: Response) {

  const schedule: Array<{id: number, nome: string, diaId: number, hora: string}> = await scheduleServices.getScheduleService();
  const days = await scheduleServices.getDaysService();

  res.send({schedule, days})
}

export async function getScheduleToEdit(req: Request, res: Response) {

  const schedule: Array<{id: number, nome: string, diaId: number, hora: string}> = await scheduleServices.getScheduleService();
  const days = await scheduleServices.getAllDaysService();

  res.send({schedule, days})
}

export async function addEvent(req: Request, res: Response) {

  const event  = req.body

  await scheduleServices.insertEvent(event)

  res.sendStatus(200)
}

export async function removeEvent(req: Request, res: Response) {

  const eventId  = req.params.id

  await scheduleServices.removeEvent(eventId)

  res.sendStatus(200)
}
