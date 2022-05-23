import * as scheduleRepositories from "../repositories/scheduleRepository.js";

export async function getScheduleService() {
  return await scheduleRepositories.getScheduleRepository();
}

export async function getDaysService() {
    return await scheduleRepositories.getDaysRepository();
  }

export async function getAllDaysService() {
    return await scheduleRepositories.getAllDaysRepository();
}

export async function insertEvent(event) {

  await scheduleRepositories.insertEventRepository(event);
}

export async function removeEvent(eventId) {

  await scheduleRepositories.removeEventRepository(eventId);
}

