export type Users = {
    [key:number]: {
        name: string;
        friendList: Array<FriendUser>;
    };
}

export type User = {
    id: number;
    name: string;
    friendList: Array<FriendUser>;
};

export type FriendUser = {
    id: number;
    name: string;
};