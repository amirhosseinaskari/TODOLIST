import React, {useEffect, useRef} from 'react'
import {Draggable} from 'react-beautiful-dnd'
import {useTodoListContext} from 'src/context/TodoListContext'
import {ITodoListItem, TODO_ITEM_STATUS} from 'src/types'
import {
  ActionWrapper,
  CheckBox,
  Delete,
  Description,
  Edit,
  InfoWrapper,
  Title,
  Wrapper,
} from './style'

const TodoItem = ({
  id,
  index,
  title,
  description,
  status,
  date,
  onEditClick = () => {},
  onDeleteClick = () => {},
}: ITodoListItem) => {
  const {editTodoStatus} = useTodoListContext()
  const checkboxRef = useRef<HTMLInputElement>(null)
  const onCheckboxChange = () => {
    if (checkboxRef && checkboxRef.current) {
      editTodoStatus({
        id,
        status: checkboxRef.current.value
          ? TODO_ITEM_STATUS.COMPELETED
          : TODO_ITEM_STATUS.ACTIVE,
      })
    }
  }
  useEffect(() => {
    console.log(id)
  }, [])
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Wrapper align_items='center' justify_content='flex-between'>
            <InfoWrapper direction='column'>
              <Title size='medium'>{title}</Title>
              <Description size='small'>{description}</Description>
            </InfoWrapper>
            <ActionWrapper justify_content='center' align_items='center'>
              <Edit
                size='small'
                onClick={() =>
                  onEditClick({
                    id,
                    title,
                    description,
                  })
                }
              >
                Edit
              </Edit>
              <Delete size='small' onClick={() => onDeleteClick({id})}>
                Delete
              </Delete>
              <CheckBox
                type='checkbox'
                defaultChecked={false}
                ref={checkboxRef}
                onChange={onCheckboxChange}
              />
            </ActionWrapper>
          </Wrapper>
        </div>
      )}
    </Draggable>
  )
}

export default TodoItem
