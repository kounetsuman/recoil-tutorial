import { selectorFamily } from 'recoil'
import { myDBQuery } from '../myselfdb/mockDB'
import userInfoQueryRequestIDState from './user-info-query-request-id-state-atom';

const userInfoQuery = selectorFamily({
  key: 'UserInfoQuery',
  get: (userID: number) => async ({ get }) => {
    try {
      get(userInfoQueryRequestIDState(userID));
      const { user } = await myDBQuery({ userID })
      return user
    } catch (e) {
      throw e
    }
  },
})

export default userInfoQuery
