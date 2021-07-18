import {DefaultButton, FlexLayout} from 'src/theme'
import styled from 'styled-components'

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
  padding: 6px 12px;
  color: var(--white);
`

export const FormStyle = styled.form`
  width: 100%;
`
