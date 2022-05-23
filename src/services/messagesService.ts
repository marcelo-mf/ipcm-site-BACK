import * as messagesRepositories from "../repositories/messagesRepository.js";

export async function addMessageService(message) {
    await messagesRepositories.insertMessageRepository(message);
  }

  export async function getMessagesService() {
    return await messagesRepositories.getMessagesRepository();
  }

  export async function removeMessageService(messageId) {

    await messagesRepositories.removeMessageRepository(messageId);
  }

export async function markAsReadService(messageId, value) {

  await messagesRepositories.markAsReadRepository(messageId, value);
}

export async function setReadValue(readValue) {

  if(readValue === 0) return 1;
  if(readValue === 1) return 0;

}