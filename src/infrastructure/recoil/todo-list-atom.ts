import { atom } from 'recoil'
import { Todo } from '../../types/Todo';

const todoListState = atom<Array<Todo>>({
  key: 'TodoList',
  default: [],
});

export default todoListState;
