import styled from 'styled-components/macro'
import { ReactNode } from 'react'

type ButtonSizeType = 'small' | 'medium'

const ButtonStyled = styled.button<{ size: ButtonSizeType }>`
  padding: ${({ size }) =>
    size === 'small' ? '0.6rem 2.6rem' : '2rem 2.6rem'};
  background: #9dd29d;
  border: 0;
  cursor: pointer;
  width: ${({ size }) => (size === 'small' ? '33%' : '66%')};
  max-width: 26rem;

  &:hover {
    background: #60b660;
  }
`

const Button = ({
  testid,
  children,
  size = 'small',
  onClickButton,
  className,
}: {
  testid?: string
  children: ReactNode
  size?: ButtonSizeType
  onClickButton: React.MouseEventHandler
  className?: string
}) => {
  return (
    <ButtonStyled
      data-testid={testid}
      onClick={onClickButton}
      size={size}
      className={className}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button
