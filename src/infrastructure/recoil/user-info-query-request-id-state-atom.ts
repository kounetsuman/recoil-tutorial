import { atomFamily } from 'recoil'

const userInfoQueryRequestIDState = atomFamily({
  key: 'UserInfoQueryRequestID',
  default: 0,
})

export default userInfoQueryRequestIDState
