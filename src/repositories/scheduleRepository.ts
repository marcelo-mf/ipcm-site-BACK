import { prisma } from "../database.js";

export async function getScheduleRepository() {
  const schedules = await prisma.programacoes.findMany({
      orderBy:{
          id: 'desc'
      }
  });

  return schedules;
}

export async function getDaysRepository() {
    const days = await prisma.$queryRaw`
    SELECT dias."nome", dias."id"
      FROM programacoes 
        JOIN dias 
          ON dias."id" = programacoes."diaId" 
    GROUP BY dias."id"
    ORDER BY dias."id"
    `
  
    return days;
  }

export async function getAllDaysRepository() {
    const days = await prisma.dias.findMany();
  
    return days;
}

export async function insertEventRepository(event) {

  await prisma.programacoes.create({
    data: {
      nome: event.nome,
      hora: event.hora,
      diaId: event.diaId
    } 
  })
}

export async function removeEventRepository(eventId) {

  await prisma.programacoes.delete({
    where: {
      id: parseInt(eventId)
    }
  })
}
