import { selector, waitForNone } from 'recoil'
import currentUserInfoQuery from './current-user-info-query-selector'
import userInfoQuery from './user-info-query-selector-family'

const friendsInfoQuery = selector({
  key: 'FriendsInfoQuery',
  get: ({ get }) => {
    const { friendList } = get(currentUserInfoQuery);
    const friendLoadables = get(waitForNone(
      friendList.map(friend => userInfoQuery(friend.id))
    ));
    return friendLoadables
      .filter(({ state }) => state === 'hasValue')
      .map(({ contents }) => contents);
  },
})

export default friendsInfoQuery
