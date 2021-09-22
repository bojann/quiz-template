import React from 'react'
import styled from 'styled-components/macro'

const ValidationError = styled.span<{ children: React.ReactNode }>`
  display: block;
  background: #eee1ab;
  text-align: center;
  padding: 1rem;
  font-size: 1.4rem;
  color: red;
  font-weight: 700;
  margin: 1.4rem 0;
`
export default ValidationError
