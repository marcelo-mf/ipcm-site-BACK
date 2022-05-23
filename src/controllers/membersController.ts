import { Response, Request } from "express";
import * as membersServices from "../services/membersService.js";

export async function getMembers(req: Request, res: Response) {

    const members = await membersServices.getMembersService();
    
    res.send(members);
}

export async function removeMember(req: Request, res: Response) {

    const memberId  = req.params.id;
  
    await membersServices.removeMemberService(memberId)
  
    res.sendStatus(200)
}

export async function addMember(req: Request, res: Response) {

    const member = req.body;

    console.log(member);

    await membersServices.addMemberService(member);
    res.sendStatus(200);
}

