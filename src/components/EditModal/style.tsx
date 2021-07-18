import {Container, DefaultButton, FlexLayout} from 'src/theme'
import styled from 'styled-components'
export const ModalContainer = styled(FlexLayout)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`
export const ModalBody = styled(Container)`
  background-color: var(--white);
  border-radius: var(--border-radius-default);
`
const defaultInput = `
    padding: 4px;
    font-size: var(--text-medium);
    border-radius: var(--border-radius-default);
    outline: none;
    border: none;
    background-color: var(--white);
`

export const InputWrapper = styled(FlexLayout)`
  width: 100%;
  padding: 6px 0;
  margin-bottom: 2px;
`
export const TitleInput = styled.input`
  ${defaultInput}
  width: 100%;
  height: 20px;
  margin-top: 4px;
  border: var(--border-light);
`

export const DescriptionInput = styled.textarea`
  ${defaultInput}
  width: 100%;
  margin-top: 4px;
  border: var(--border-light);
`
export const Button = styled(DefaultButton)`
  margin-top: 6px;
  margin-right: 6px;
  padding: 6px 12px;
  color: var(--white);
`

export const FormStyle = styled.form`
  width: 100%;
`
