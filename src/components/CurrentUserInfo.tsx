import { useRecoilCallback, useRecoilValue } from 'recoil'
import currentUserIDState from '../infrastructure/recoil/current-user-id-atom'
import currentUserInfoQuery from '../infrastructure/recoil/current-user-info-query-selector'
import friendsInfoQuery from '../infrastructure/recoil/friends-info-query-selector'
import userInfoQuery from '../infrastructure/recoil/user-info-query-selector-family'

export default function CurrentUserInfo() {
  const currentUser = useRecoilValue(currentUserInfoQuery)
  const friends = useRecoilValue(friendsInfoQuery)

  const changeUser = useRecoilCallback(({ snapshot, set }) => (userID: number) => {
    snapshot.getLoadable(userInfoQuery(userID)) // pre-fetch user info
    set(currentUserIDState, userID) // change current user to start new render
  })

  return (
    <div>
      <h1>{currentUser.name}</h1>
      <ul>
        {friends.map(friend =>
          <li key={friend.id} onClick={() => changeUser(friend.id)}>
            {friend.name}
          </li>
        )}
      </ul>
    </div>
  )
}
