import React, {createContext, useContext, useState} from 'react'
import {ITodoListItem, TODO_ITEM_STATUS} from 'src/types'
interface TodoListState {
  list?: ITodoListItem[]
  addTodo: Function
  editTodo: Function
  deleteTodo: Function
  editTodoStatus: Function
  reorderList: Function
}
const initialTodoListState: TodoListState = {
  list: [],
  addTodo: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
  editTodoStatus: () => {},
  reorderList: () => {},
}

export const TodoListContext =
  createContext<TodoListState>(initialTodoListState)

export const TodoListProvider: React.FC = ({children}) => {
  // list of todos
  const [list, setList] = useState<ITodoListItem[]>([])
  // list of ids
  const [itemId, setItemId] = useState<number>(0)
  // add new todo to todo list
  const addTodo = (item: ITodoListItem) => {
    setItemId(itemId + 1)
    setList(
      [...list, {...item, id: `item-${itemId}`, index: list.length}].sort(
        (a, b) => a.index - b.index
      )
    )
  }

  // edit a todo item
  const editTodo = ({
    id,
    title,
    description,
  }: {
    id: string
    title: string
    description: string
  }) => {
    let todo = list.find(t => t.id === id)
    if (!todo) return false
    todo = {...todo, title, description}
    let filteredList = list.filter(t => t.id !== id)
    filteredList = [...filteredList, todo]
    setList(filteredList.sort((a, b) => a.index - b.index))
  }
  // edit todo status
  const editTodoStatus = ({
    id,
    status,
  }: {
    id: string
    status: TODO_ITEM_STATUS
  }) => {
    let todo = list.find(t => t.id === id)
    if (!todo) return false
    todo = {...todo, status}
    let filteredList = list.filter(t => t.id !== id)
    filteredList = [...filteredList, todo]
    setList(filteredList.sort((a, b) => a.index - b.index))
  }
  // delete a todo item
  const deleteTodo = (id: string) => {
    const todo = list.find(item => item.id === id)
    if (!todo) return false
    let filteredList = list.filter(t => t.id !== id)
    setList(filteredList.sort((a, b) => a.index - b.index))
  }

  // reorder list
  const reorderList = (list: ITodoListItem[]) => {
    setList([...list].sort((a, b) => a.index - b.index))
  }
  return (
    <TodoListContext.Provider
      value={{list, addTodo, editTodo, deleteTodo, editTodoStatus, reorderList}}
    >
      {children}
    </TodoListContext.Provider>
  )
}

export const useTodoListContext = () => {
  return useContext(TodoListContext)
}
