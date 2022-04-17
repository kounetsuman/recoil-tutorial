import { selector } from 'recoil'
import currentUserIDState from './current-user-id-atom'
import userInfoQuery from './user-info-query-selector-family'

const currentUserInfoQuery = selector({
  key: 'CurrentUserInfoQuery',
  get: ({ get }) => get(userInfoQuery(get(currentUserIDState))),
})

export default currentUserInfoQuery
