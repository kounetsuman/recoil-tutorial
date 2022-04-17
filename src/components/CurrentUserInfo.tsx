import { useRecoilValue, useSetRecoilState } from "recoil";
import currentUserIDState from "../infrastructure/recoil/current-user-id-atom";
import currentUserInfoQuery from "../infrastructure/recoil/current-user-info-query-selector";
import friendsInfoQuery from "../infrastructure/recoil/friends-info-query-selector";
import { User } from "../types/User";

export default function CurrentUserInfo() {
    const currentUser = useRecoilValue(currentUserInfoQuery);
    const friends = useRecoilValue(friendsInfoQuery);
    const setCurrentUserID = useSetRecoilState(currentUserIDState);
    return (
      <div>
        <h1>{currentUser.name}</h1>
        <ul>
          {friends.map((friend: User) =>
            <li key={friend.id} onClick={() => setCurrentUserID(friend.id)}>
              {friend.name}
            </li>
          )}
        </ul>
      </div>
    );
  }