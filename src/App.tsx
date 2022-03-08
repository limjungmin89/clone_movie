import React from 'react'
import Router from 'Routes/Router'
import styled, { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.primaryText};
  height: 200vh;
`

const App = () => {
  return (
    <ThemeProvider theme={theme.dark}>
      <Container>
        <Router />
      </Container>
    </ThemeProvider>
  )
}

export default App
