import { atomFamily } from 'recoil'
import { User } from '../../types/User'

const userInfoState = atomFamily({
  key: 'UserInfo',
  default: (id: number) => myFetchUserInfo(id),
})

export default userInfoState

async function myFetchUserInfo(id: number): Promise<User> {
  return {
    id: 1,
    name: 'John',
    friendList: [],
  }
}
