import { prisma } from "../database.js";

export async function insertMessageRepository(message) {

    await prisma.mensagens.create({
      data: {
        nome: message.nome,
        telefone: message.telefone,
        email: message.email,
        mensagem: message.mensagem
      } 
    })
}

export async function getMessagesRepository() {

    return await prisma.mensagens.findMany({
      orderBy: [{
        read: 'asc'
      }]
    });
}

export async function removeMessageRepository(messageId) {

    await prisma.mensagens.delete({
      where: {
        id: parseInt(messageId)
      }
    })
  }

  export async function markAsReadRepository(messageId, value) {

    await prisma.mensagens.update({
      where: {
        id: parseInt(messageId)
      },
      data:{
        read: value
      }
    })
  }