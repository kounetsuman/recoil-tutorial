import {
  useRecoilCallback,
  useRecoilValue,
} from 'recoil'
import currentUserIDState from '../infrastructure/recoil/current-user-id-atom'
import friendsInfoQuery from '../infrastructure/recoil/friends-info-query-selector'
import userInfoQuery from '../infrastructure/recoil/user-info-query-selector-family'
import useRefreshUserInfo from '../useCase/use-refresh-user-info'

export default function CurrentUserInfo() {
  const currentUserID = useRecoilValue(currentUserIDState)
  const currentUserInfo = useRecoilValue(userInfoQuery(currentUserID))
  const friends = useRecoilValue(friendsInfoQuery)
  const refreshUserInfo = useRefreshUserInfo(currentUserID);

  const changeUser = useRecoilCallback(
    ({ snapshot, set }) => (userID: number) => {
      snapshot.getLoadable(userInfoQuery(userID)) // pre-fetch user info
      set(currentUserIDState, userID) // change current user to start new render
    },
  )

  return (
    <div>
      <h1>{currentUserInfo.name}</h1>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} onClick={() => changeUser(friend.id)}>
            {friend.name}
          </li>
        ))}
      </ul>
      <button onClick={refreshUserInfo}>Refresh</button>
    </div>
  )
}
