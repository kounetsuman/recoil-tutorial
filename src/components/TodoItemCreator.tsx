import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import todoListState from '../infrastructure/recoil/todo-list-atom'
import { Todo } from '../types/Todo'

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  /** todoをリストの最後列に追加する */
  const addItem = () => {
    setTodoList((oldTodoList: Array<Todo>) => {
      const newTodo = {
          id: getId(),
          text: inputValue,
          isComplete: false,
      };
      return [...oldTodoList, newTodo]
    })
    setInputValue('')
  }

  /** 入力ごとに状態を変更する */
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

// utility for creating unique Id
let id = 0
function getId() {
  return id++
}
