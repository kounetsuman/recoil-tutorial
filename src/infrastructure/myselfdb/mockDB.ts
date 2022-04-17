import { User, Users } from '../../types/User'

export interface Out {
  user: User;
};

export const myDBQuery = async (query: { userID: number }) => {
    await setTimeout(() => {}, 1000);
    const foundUser = tableOfUsers[query.userID];
    const result = {} as Out;
    if (!foundUser) {
      throw new Error('User not found');
    }
    result.user = {
      id: query.userID,
      ...foundUser,
    };
    return result;
}

export const tableOfUsers: Users = {
  1: {
    name: 'テスト一郎',
    friendList: [],
  },
  2: {
    name: 'テスト二郎',
    friendList: [{
      id: 1,
      name: 'テスト一郎',
    }],
  },
  3: {
    name: 'テスト三郎',
    friendList: [{
      id: 1,
      name: 'テスト一郎',
    }, {
      id: 2,
      name: 'テスト二郎',
    }],
  },
  4: {
    name: 'テスト四郎',
    friendList: [],
  },
}
