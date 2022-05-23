import { prisma } from "../database.js"


export async function findUserByEmail(usuario: string) {

    const userExists = await prisma.admins.findFirst({
        where: {
            usuario: usuario
        }
    })

    return userExists
}