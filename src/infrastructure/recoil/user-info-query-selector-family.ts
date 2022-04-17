import { selectorFamily } from 'recoil'
import { myDBQuery } from '../myselfdb/mockDB'

const userInfoQuery = selectorFamily({
  key: 'UserInfoQuery',
  get: (userID: number) => async () => {
    try {
      const { user } = await myDBQuery({ userID })
      return user
    } catch (e) {
      throw e
    }
  },
})

export default userInfoQuery
