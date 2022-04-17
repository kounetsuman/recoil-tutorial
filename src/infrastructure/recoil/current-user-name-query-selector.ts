import { selector } from "recoil";
import { myDBQuery } from "../myselfdb/mockDB";
import currentUserIDState from "./current-user-id-atom";

const currentUserNameQuery = selector({
    key: 'CurrentUserName',
    get: async ({ get }) => {
      const response = await myDBQuery({
        userID: get(currentUserIDState),
      });
      if (response.error) {
        throw response.error;
      }
      return response.name;
    },
  });

    export default currentUserNameQuery;
