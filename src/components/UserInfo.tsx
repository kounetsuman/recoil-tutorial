import { useRecoilValueLoadable } from "recoil";
import userNameQuery from "../infrastructure/recoil/user-name-query-selector-family";

export default function UserInfo({ userID }: { userID: number }) {
    const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID));
    switch (userNameLoadable.state) {
      case 'hasValue':
        return (
            <div>
                {userNameLoadable.contents}
            </div>
        );
      case 'loading':
        return (
            <div>
                Loading...
            </div>
        );
      case 'hasError':
        throw userNameLoadable.contents;
    }
  }