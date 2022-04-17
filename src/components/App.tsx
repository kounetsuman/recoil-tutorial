import { RecoilRoot } from 'recoil'
// import CharacterCounter from './CharacterCounter'
import TodoList from './TodoList'

function App() {
  return (
    <RecoilRoot>
      <TodoList />
      {/* <CharacterCounter /> */}
    </RecoilRoot>
  )
}

export default App
