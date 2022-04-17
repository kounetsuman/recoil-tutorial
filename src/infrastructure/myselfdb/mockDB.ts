import { Users } from '../../types/User'

interface Out {
  error?: Error,
  name?: string,
};

export const myDBQuery = async (query: { userID: number }) => {
    await setTimeout(() => {}, 1000);
    const foundUser = tableOfUsers[query.userID];
    const result = {} as Out;
    if (!foundUser) {
      result.error = new Error('User not found');
    } else {
      result.name = foundUser.name;
    }
    return result;
}

export const tableOfUsers: Users = {
  1: {
    name: 'テスト一郎',
  },
  2: {
    name: 'テスト二郎',
  },
  3: {
    name: 'テスト三郎',
  },
  4: {
    name: 'テスト四郎',
  },
}
