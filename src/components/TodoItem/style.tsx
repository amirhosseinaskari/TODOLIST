import styled from 'styled-components'
import {DefaultActionButton, FlexLayout, Text} from 'src/theme'

export const Wrapper = styled(FlexLayout)`
  width: 400px;
  max-width: 100%;
  margin: 10px 0;
  padding: 10px;
  background-color: var(--white);
  border: var(--border-light);
  border-radius: var(--border-radius-default);
`
export const InfoWrapper = styled(FlexLayout)`
  max-width: 250px;
  flex-grow: 1;
`
export const Description = styled(Text)`
  width: 100%;
  color: var(--carbon-text-light);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Title = styled(Text)`
  color: var(--carbon-text);
`

export const ActionWrapper = styled(FlexLayout)`
  margin-left: 20px;
`

export const Edit = styled(DefaultActionButton)`
  color: var(--blue-text);
`

export const Delete = styled(DefaultActionButton)`
  margin-left: 4px;
  color: var(--danger-text);
`

export const CheckBox = styled.input`
  width: 20px;
  height: 22px;
  outline: none;
  border: var(--border-light);
  border-radius: 2px;
  background-color: var(--white);
`
