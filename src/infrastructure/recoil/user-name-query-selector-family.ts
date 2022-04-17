import { selectorFamily } from 'recoil'
import { myDBQuery } from '../myselfdb/mockDB'

const userNameQuery = selectorFamily({
  key: 'UserName',
  get: (userID: number) => async () => {
    const response = await myDBQuery({ userID })
    if (response.error) {
      throw response.error
    }
    return response.name
  },
})

export default userNameQuery
