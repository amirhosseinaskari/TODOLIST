import React, {useEffect, useRef, useState} from 'react'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
import TodoItem from 'src/components/TodoItem'
import {useTodoListContext} from 'src/context/TodoListContext'
import {Container, FlexLayout, Heading} from 'src/theme'
import {ITodoListItem, TODO_ITEM_STATUS} from 'src/types'
import DeleteModal from '../DeleteModal'
import EditModal from '../EditModal'

const TodoList = () => {
  // todo list context
  const {list, reorderList} = useTodoListContext()

  // todo list
  const [todoList, setTodoList] = useState<ITodoListItem[]>([])
  useEffect(() => {
    setTodoList(list || [])
  }, [list])
  // id will set on edit todo item clicked
  const [id, setId] = useState<string>('')

  // edit modal will be open on edit todo item clicked
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)

  const [editInfo, setEditInfo] = useState<{
    id: string
    title: string
    description: string
  }>({id: '', title: '', description: ''})

  // delete modal will be open on delete todo item clicked
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)

  // on edit button clicked
  const onEditClicked = ({
    id,
    title,
    description,
  }: {
    id: string
    title: string
    description: string
  }) => {
    setEditInfo({id, title, description})
    setIsDeleteModalOpen(false)
    setIsEditModalOpen(true)
  }

  // on delete button clicked
  const onDeleteClicked = ({id}: {id: string}) => {
    setIsDeleteModalOpen(true)
    setIsEditModalOpen(false)
    setId(id)
  }
  const onDragEnd = ({source, destination, draggableId}: any) => {
    if (!destination) {
      return
    }
    if (destination.index === source.index) return
    const newList = [...todoList]
    const copyItem = {...newList[source.index]}
    newList.splice(source.index, 1)
    newList.splice(destination.index, 0, copyItem)
    reorderList(newList.map((item, index) => ({...item, index})))
  }
  return (
    <Container direction='column'>
      <Heading>TODO LIST</Heading>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='drop-1'>
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <FlexLayout direction='column'>
                {todoList.map((item, index) => (
                  <TodoItem
                    {...item}
                    index={index}
                    key={item.id}
                    onEditClick={onEditClicked}
                    onDeleteClick={onDeleteClicked}
                  />
                ))}
                {provided.placeholder}
              </FlexLayout>
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {isEditModalOpen ? (
        <EditModal {...editInfo} setModal={setIsEditModalOpen} />
      ) : null}
      {isDeleteModalOpen ? (
        <DeleteModal id={id} setModal={setIsDeleteModalOpen} />
      ) : null}
    </Container>
  )
}

export default TodoList
