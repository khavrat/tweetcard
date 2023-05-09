import { produce } from "immer";
import fetchUsers from "./fetchUsers";

export let usersCash = [];

export const getUsersByCash = async () => {
    try {
      const baseUsers = await fetchUsers();

      const newUsers = produce(baseUsers, (draftUsers) => {
        draftUsers.forEach((user) => {
          user.isFollowing = false;
          user.followers += 100500;
        });
      });
      usersCash = newUsers;
    } catch (error) {
      console.error(error);
    }

  return usersCash;
};
