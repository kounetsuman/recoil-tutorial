import { selector } from 'recoil'
import { tableOfUsers } from '../myselfdb/mockDB'
import currentUserIDState from './current-user-id-atom'

const currentUserNameState = selector({
  key: 'CurrentUserName',
  get: ({ get }) => {
    return tableOfUsers[get(currentUserIDState)].name
  },
})

export default currentUserNameState
