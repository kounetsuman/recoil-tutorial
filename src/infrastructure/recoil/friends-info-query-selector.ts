import { selector } from 'recoil'
import { FriendUser } from '../../types/User';
import currentUserInfoQuery from './current-user-info-query-selector'
import userInfoQuery from './user-info-query-selector-family'

const friendsInfoQuery = selector({
  key: 'FriendsInfoQuery',
  get: ({ get }) => {
    const user = get(currentUserInfoQuery);
    return user.friendList.map((friend: FriendUser) => get(userInfoQuery(friend.id)));
  },
})

export default friendsInfoQuery
