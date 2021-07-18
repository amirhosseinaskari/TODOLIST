import styled from 'styled-components'
import {IButton, IFlexLayout, IText} from './types'

export const FlexLayout = styled.div<IFlexLayout>`
  display: flex;
  align-items: ${({align_items}) => (align_items ? align_items : 'flex-start')};
  justify-content: ${({justify_content}) =>
    justify_content ? justify_content : 'flex-start'};
  flex-direction: ${({direction}) => (direction ? direction : 'row')};
`

export const Text = styled.div<IText>`
  margin-top: ${({marginTop}) => (marginTop ? marginTop : '0')};
  margin-bottom: ${({marginBottom}) => (marginBottom ? marginBottom : '0')};
  font-size: ${({size}) =>
    size
      ? size === 'large'
        ? `var(--text-large)`
        : size === 'medium'
        ? `var(--text-medium)`
        : `var(--text-small)`
      : 'initial'};
`
export const DefaultButton = styled.button<IButton>`
  padding: 4px;
  font-size: ${({size}) =>
    size
      ? size === 'large'
        ? `var(--text-large)`
        : size === 'medium'
        ? `var(--text-medium)`
        : `var(--text-small)`
      : 'initial'};
  outline: none;
  border: none;
  border-radius: var(--border-radius-default);
  cursor: pointer;
  background-color: ${({bg}) => (bg ? bg : 'unset')};
`

export const DefaultActionButton = styled(DefaultButton)`
  border: var(--border-light);
  border-radius: 2px;
  background-color: var(--white);
`

export const Heading = styled.h2`
  padding-bottom: 2px;
  font-size: 16px;
  border-bottom: 1px solid var(--carbon-text);
`

export const Container = styled(FlexLayout)`
  width: 100%;
  max-width: 400px;
  padding: 16px;
`
