import React from 'react'
import {Button, FormStyle, ModalBody, ModalContainer} from './style'
import {Heading, Text} from 'src/theme'
import {useTodoListContext} from 'src/context/TodoListContext'
interface DeleteModal {
  id: string
  setModal: Function
}
const DeleteModal: React.FC<DeleteModal> = ({
  id = '',
  setModal = () => {},
}: DeleteModal) => {
  const {deleteTodo} = useTodoListContext()
  const onCloseModal = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    setModal(false)
  }

  const onSubmitForm = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    deleteTodo(id)
    setModal(false)
  }
  return (
    <ModalContainer
      justify_content='center'
      align_items='center'
      onClick={onCloseModal}
    >
      <ModalBody
        direction='column'
        onClick={(e: any) => {
          e.stopPropagation()
        }}
      >
        <Heading>DELETE TODO</Heading>
        <Text size='medium' marginBottom='10px' marginTop='10px'>
          Are you sure to delete this item?
        </Text>
        <FormStyle onSubmit={onSubmitForm}>
          <Button type='submit' size='medium' bg='var(--danger-text)'>
            YES
          </Button>
          <Button
            type='button'
            size='medium'
            bg='var(--black)'
            onClick={onCloseModal}
          >
            NO
          </Button>
        </FormStyle>
      </ModalBody>
    </ModalContainer>
  )
}

export default DeleteModal
