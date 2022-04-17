import { useRecoilValue } from "recoil";
import currentUserNameQuery from "../infrastructure/recoil/current-user-name-query-selector";

export default function CurrentUserInfo() {
    const userName = useRecoilValue(currentUserNameQuery);
    return (
        <div>
            { userName }
        </div>
    );
  }