import * as authServices from "../services/authService.js"
import { Request, Response } from "express";

export async function SignIn(req: Request, res: Response) {

    interface User {
        usuario: string,
        senha: string
    }

    console.log(req.body)

    const {usuario, senha}: User = req.body;

    const token = await authServices.generateToken(usuario);
    await authServices.validateUserAndPassword(usuario, senha);

    res.sendStatus(200);
}