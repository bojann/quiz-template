import React, { ReactNode } from 'react'
import styled from 'styled-components/macro'
import Header from './Header/Header'

const Container = styled.div`
  overflow-y: scroll;
`

const AppContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Container data-testid="app">
      <Header />
      <div>{children}</div>
    </Container>
  )
}

export default AppContainer
