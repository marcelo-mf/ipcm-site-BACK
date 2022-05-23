import * as membersRepositories from "../repositories/membersRepository.js";

  export async function getMembersService() {
    return await membersRepositories.getMembersRepository();
  }

  export async function removeMemberService(memberId) {

    await membersRepositories.removeMemberRepository(memberId);
  }

  export async function addMemberService(member) {

    await membersRepositories.addMemberRepository(member);
  }

