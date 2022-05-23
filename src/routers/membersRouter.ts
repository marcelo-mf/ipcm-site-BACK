import { Router } from "express";
import { addMember, getMembers, removeMember } from "../controllers/membersController.js";

const membersRouter = Router();

membersRouter.get("/getMembers", getMembers);
membersRouter.post("/addMember", addMember);
membersRouter.delete("/removeMember/:id", removeMember);

export default membersRouter;
