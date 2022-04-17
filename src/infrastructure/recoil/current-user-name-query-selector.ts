import { selector } from "recoil";
import { myDBQuery } from "../myselfdb/mockDB";
import currentUserIDState from "./current-user-id-atom";

const currentUserNameQuery = selector({
    key: 'CurrentUserName',
    get: async ({ get }) => {
      try {
        const response = await myDBQuery({
          userID: get(currentUserIDState),
        });
        return response.user;
      } catch (e) {
        throw e;
      }
    },
  });

    export default currentUserNameQuery;
