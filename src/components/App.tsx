import { RecoilRoot } from 'recoil'
import CurrentUserInfo from './CurrentUserInfo'
import CharacterCounter from './CharacterCounter'
import TodoList from './TodoList'
import React from 'react'
import UserInfo from './UserInfo'
import ErrorBoundary from './ErrorBoundary'

function App() {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <UserInfo userID={1}/>
          <UserInfo userID={2}/>
          <UserInfo userID={3}/>
          <br /><br /><br /><br /><br />
          <CurrentUserInfo />
          <br /><br /><br /><br /><br />
          <TodoList />
          <br /><br /><br /><br /><br />
          <CharacterCounter />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  )
}

export default App
