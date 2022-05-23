import { prisma } from "../database.js";

export async function getMembersRepository() {

    return await prisma.membros.findMany({
        orderBy:{
            nome: 'asc'
        }
    });
}

export async function removeMemberRepository(memberId) {

    await prisma.membros.delete({
      where: {
        id: parseInt(memberId)
      }
    })
  }

export async function addMemberRepository(member) {

  await prisma.membros.create({
    data: {
      nome: member.nome,
      telefone: member.telefone,
      email: member.email,
      sexo: member.sexo
    } 
  })
}
