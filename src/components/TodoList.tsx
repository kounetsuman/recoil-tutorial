import { useRecoilValue } from 'recoil'
import filteredTodoListState from '../infrastructure/recoil/filtered-todo-list-selector'
import { Todo } from '../types/Todo'
import TodoItem from './TodoItem'
import TodoItemCreator from './TodoItemCreator'
import TodoListFilters from './TodoListFilters'
import TodoListStats from './TodoListStats'

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem: Todo) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}
