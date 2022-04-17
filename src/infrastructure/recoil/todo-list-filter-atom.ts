import { atom } from "recoil";
import { TodoListFilter } from "../../types/Todo";

const todoListFilterState = atom<TodoListFilter>({
  key: 'TodoListFilter',
  default: 'Show All',
})

export default todoListFilterState;
