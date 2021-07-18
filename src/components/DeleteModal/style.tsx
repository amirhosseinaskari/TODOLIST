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

export const Button = styled(DefaultButton)`
  margin-top: 6px;
  margin-right: 6px;
  padding: 6px 12px;
  color: var(--white);
`

export const FormStyle = styled.form`
  width: 100%;
`
