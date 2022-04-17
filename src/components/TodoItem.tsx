import { useRecoilState } from 'recoil';
import todoListState from '../infrastructure/recoil/todo-list-atom';
import { Todo } from '../types/Todo';

export default function TodoItem({ item }: { item: Todo }) {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((listItem: Todo) => listItem === item)

  /** テキストを入力するごとに状態を変更する */
  const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newList: Todo[] = replaceItemAtIndex(todoList, index, {
      ...item,
      text: event.target.value,
    })

    setTodoList(newList)
  }

  /** 完了状態を変更する */
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })

    setTodoList(newList)
  }

  /** Todoを削除する */
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  }

  return (
    <div>
      <input type='text' value={item.text} onChange={editItemText} />
      <input
        type='checkbox'
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

const replaceItemAtIndex = (
    todoItemList: Todo[], 
    index: number, 
    todoItem: Todo,
): Todo[] => {
  return [
    ...todoItemList.slice(0, index), todoItem,
    ...todoItemList.slice(index + 1),
  ];
}

const removeItemAtIndex = (
    todoItemList: Todo[],
    index: number,
): Todo[] => {
  return [
    ...todoItemList.slice(0, index),
    ...todoItemList.slice(index + 1),
   ];
}
