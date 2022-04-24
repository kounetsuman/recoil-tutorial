import { useSetRecoilState } from 'recoil'
import userInfoQueryRequestIDState from '../infrastructure/recoil/user-info-query-request-id-state-atom'

function useRefreshUserInfo(userID: number) {
  const setUserInfoQueryRequestID = useSetRecoilState(
    userInfoQueryRequestIDState(userID),
  )
  return () => {
    setUserInfoQueryRequestID((requestID) => requestID + 1)
  }
}

export default useRefreshUserInfo
