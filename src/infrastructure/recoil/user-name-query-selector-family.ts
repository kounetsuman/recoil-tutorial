import { selectorFamily } from 'recoil'
import { myDBQuery } from '../myselfdb/mockDB'

const userNameQuery = selectorFamily({
  key: 'UserName',
  get: (userID: number) => async () => {
    try {
      const { user } = await myDBQuery({ userID })
      return user.name
    } catch (e) {
      throw e
    }
  },
})

export default userNameQuery
