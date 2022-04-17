import { atom } from 'recoil'

const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 1,
})

export default currentUserIDState
