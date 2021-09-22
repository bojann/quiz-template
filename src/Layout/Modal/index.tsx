import Backdrop from 'Layout/common/Backdrop'
import Button from 'Layout/common/Button'
import React, { ReactNode } from 'react'
import styled from 'styled-components/macro'

const ModalStyle = styled.div`
  background: #ccc;
  padding: 1rem 2rem;
  text-align: center;
  min-width: 28rem;
  font-size: 1.4rem;
`

const TextWrapper = styled.div`
  padding: 1rem;
`

const ButtonStyled = styled(Button)`
  background: orange;
`

const Modal = ({
  children,
  onClickButton,
}: {
  children: ReactNode
  onClickButton: React.MouseEventHandler
}) => {
  return (
    <Backdrop>
      <ModalStyle>
        <TextWrapper>{children}</TextWrapper>
        <ButtonStyled
          testid="modal-start-over-button"
          size="medium"
          onClickButton={onClickButton}
        >
          Start Over
        </ButtonStyled>
      </ModalStyle>
    </Backdrop>
  )
}

export default Modal
