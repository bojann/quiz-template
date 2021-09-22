import styled, { keyframes } from 'styled-components/macro'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 0.4rem solid orange;
  border-right: 0.4rem solid orange;
  border-bottom: 0.4rem solid orange;
  border-left: 0.4rem solid #fff;
  background: transparent;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`

export default LoadingSpinner
