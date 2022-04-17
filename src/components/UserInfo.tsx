import { useRecoilValue } from "recoil";
import userNameQuery from "../infrastructure/recoil/user-name-query-selector-family";

export default function UserInfo({ userID }: { userID: number }) {
    const userName = useRecoilValue(userNameQuery(userID));
    return (
        <div>
            { userName }
        </div>
    );
  }