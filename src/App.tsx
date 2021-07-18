import React from 'react'
import './App.scss'
import './theme/_variables.scss'
import TodoList from './components/TodoList'
import Form from './components/Form'
import {TodoListProvider} from './context/TodoListContext'
function App() {
  return (
    <div className='App'>
      <TodoListProvider>
        <Form />
        <TodoList />
      </TodoListProvider>
    </div>
  )
}

export default App
