import { useRecoilState } from 'recoil'
import todoListFilterState from '../infrastructure/recoil/todo-list-filter-atom'
import { isTodoListFilter } from '../types/Todo'

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = event.target.value
    if (isTodoListFilter(newFilter)) {
        setFilter(newFilter)
    }
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}

export default TodoListFilters
