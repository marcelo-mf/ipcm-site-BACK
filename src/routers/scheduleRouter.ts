import { Router } from "express";
import { addEvent, getSchedule, getScheduleToEdit, removeEvent } from "../controllers/scheduleController.js";

const scheduleRouter = Router();

scheduleRouter.get("/getSchedule", getSchedule);
scheduleRouter.get("/getScheduleToEdit", getScheduleToEdit);
scheduleRouter.post("/addEvent", addEvent);
scheduleRouter.delete("/removeEvent/:id", removeEvent);

export default scheduleRouter;
