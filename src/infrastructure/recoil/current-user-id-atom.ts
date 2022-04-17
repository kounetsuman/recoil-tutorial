import { atom } from 'recoil'

const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: myFetchCurrentUserID(),
})

export default currentUserIDState

async function myFetchCurrentUserID(): Promise<number> {
  return 1;
}

