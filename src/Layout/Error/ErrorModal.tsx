import { navigate } from 'hookrouter'
import Backdrop from 'Layout/common/Backdrop'
import Modal from 'Layout/Modal'
import React, { ReactNode } from 'react'

const ErrorModal = ({ children }: { children: ReactNode }) => {
  const onClickButton = () => {
    navigate('/')
  }
  return (
    <Backdrop>
      <Modal onClickButton={onClickButton}>
        <h3 data-testid="error-content">{children}</h3>
      </Modal>
    </Backdrop>
  )
}

export default ErrorModal
