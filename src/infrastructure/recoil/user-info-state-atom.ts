import { atomFamily } from 'recoil'
import { User } from '../../types/User'

const userInfoState = atomFamily({
  key: 'UserInfo',
  default: (userID: number) => fetch(userInfoURL(userID)),
})

export default userInfoState
function userInfoURL(userID: number): RequestInfo {
    return `/api/users/${userID}`
}

