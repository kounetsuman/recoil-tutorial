import { useRecoilValue } from 'recoil'
import todoListState from '../infrastructure/recoil/todo-list-atom'
import { Todo } from '../types/Todo'
import TodoItem from './TodoItem'
import TodoItemCreator from './TodoItemCreator'

export default function TodoList() {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem: Todo) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}
