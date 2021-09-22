import { navigate } from 'hookrouter'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  text-align: center;
  width: 50%;
  margin: 20% auto;
`

const ErrorPage = () => {
  return (
    <Wrapper data-testid="error-page">
      <h2 data-testid="error-page-text">Page not found</h2>
      <a
        href="/"
        data-testid="return-link"
        onClick={(ev) => {
          ev.preventDefault()
          navigate('/')
        }}
      >
        Go to main page
      </a>
    </Wrapper>
  )
}

export default ErrorPage
