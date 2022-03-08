import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: ${(props) => props.theme.title};
  background: ${(props) => props.theme.background};
`

const Button = (props: React.ComponentPropsWithoutRef<'button'>) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
