import React from 'react'
import styled from 'styled-components/macro'

const HeaderStyle = styled.div`
  background-color: orange;
  padding: 1.2rem 1.6rem;
  color: #fff;
`

const HeadStyle = styled.h1`
  margin: 0;
`

const Header = () => {
  return (
    <HeaderStyle>
      <HeadStyle>Quiz Mania</HeadStyle>
    </HeaderStyle>
  )
}

export default Header
