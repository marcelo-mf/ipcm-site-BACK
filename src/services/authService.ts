import * as authRepositories from "../repositories/authRepository.js"
import jwt from 'jsonwebtoken';

export async function validateUserAndPassword(usuario: string, senha: string) {
 
    const user = await authRepositories.findUserByEmail(usuario);

    if(user === null) {
        throw {message: "falha no login"}
    }
    else if (user.usuario === usuario && user.senha === senha) {
        return
    } else {
        throw {message: "falha no login"}
    }
}

export async function generateToken(usuario: string) {

    const dados = {usuario: usuario}
    const chaveSecreta = process.env.JWT_SECRET;
    const token: string = jwt.sign(dados, chaveSecreta);

    return token;
}