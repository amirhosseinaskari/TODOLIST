import React, {useRef} from 'react'
import {useTodoListContext} from 'src/context/TodoListContext'
import {Container, Heading, Text} from 'src/theme'
import {TODO_ITEM_STATUS} from 'src/types'
import {
  Button,
  DescriptionInput,
  FormStyle,
  InputWrapper,
  TitleInput,
} from './style'

const Form: React.FC = () => {
  const {addTodo} = useTodoListContext()
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  const onFormSubmit = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    addTodo({
      id: '',
      status: TODO_ITEM_STATUS.ACTIVE,
      title: titleRef && titleRef.current ? titleRef.current.value : '',
      description:
        descriptionRef && descriptionRef.current
          ? descriptionRef.current.value
          : '',
      date: new Date(),
      index: 0,
    })
    if (titleRef && titleRef.current) titleRef.current.value = ''
    if (descriptionRef && descriptionRef.current)
      descriptionRef.current.value = ''
  }
  return (
    <Container direction='column'>
      <Heading>ADD NEW TODO</Heading>
      <FormStyle onSubmit={onFormSubmit}>
        <InputWrapper direction='column'>
          <Text size='medium'>Title:</Text>
          <TitleInput ref={titleRef} />
        </InputWrapper>
        <InputWrapper direction='column'>
          <Text size='medium'>Description:</Text>
          <DescriptionInput ref={descriptionRef} />
        </InputWrapper>
        <Button type='submit' size='medium' bg='var(--black)'>
          SUBMIT
        </Button>
      </FormStyle>
    </Container>
  )
}

export default Form
