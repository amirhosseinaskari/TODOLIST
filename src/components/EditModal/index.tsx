import React, {useRef} from 'react'
import {
  Button,
  DescriptionInput,
  FormStyle,
  InputWrapper,
  ModalBody,
  ModalContainer,
  TitleInput,
} from './style'
import {Heading, Text} from 'src/theme'
import {useTodoListContext} from 'src/context/TodoListContext'
interface EditModal {
  title: string
  description: string
  id: string
  setModal: Function
}
const EditModal: React.FC<EditModal> = ({
  title,
  description,
  id = '',
  setModal = () => {},
}: EditModal) => {
  const {editTodo} = useTodoListContext()
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  const onFormSubmit = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    editTodo({
      id,
      title: titleRef && titleRef.current ? titleRef.current.value : title,
      description:
        descriptionRef && descriptionRef.current
          ? descriptionRef.current.value
          : description,
    })
    setModal(false)
  }

  const onCloseModal = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
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
        <Heading>EDIT TODO</Heading>
        <FormStyle onSubmit={onFormSubmit}>
          <InputWrapper direction='column'>
            <Text size='medium'>Title:</Text>
            <TitleInput ref={titleRef} defaultValue={title} />
          </InputWrapper>
          <InputWrapper direction='column'>
            <Text size='medium'>Description:</Text>
            <DescriptionInput ref={descriptionRef} defaultValue={description} />
          </InputWrapper>
          <Button type='submit' size='medium' bg='var(--black)'>
            EDIT
          </Button>
          <Button
            type='button'
            size='medium'
            bg='var(--danger-text)'
            onClick={onCloseModal}
          >
            Close
          </Button>
        </FormStyle>
      </ModalBody>
    </ModalContainer>
  )
}

export default EditModal
