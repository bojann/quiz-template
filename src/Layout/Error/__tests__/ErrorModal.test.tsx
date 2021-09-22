import { fireEvent, render, screen } from '@testing-library/react'
import { navigate } from 'hookrouter'
import ErrorModal from '../ErrorModal'

const CONTENT = 'Oops'

jest.mock('hookrouter', () => ({
  navigate: jest.fn(),
}))

describe('when ErrorModal renders', () => {
  beforeEach(() => {
    render(<ErrorModal>{CONTENT}</ErrorModal>)
  })

  it('should show error content', () => {
    expect(screen.getByTestId('error-content')).toBeVisible()
    expect(screen.getByTestId('error-content')).toHaveTextContent(CONTENT)
  })

  it('should navigate to home when button "start over" clicked', () => {
    expect(screen.getByTestId('modal-start-over-button')).toBeVisible()
    fireEvent.click(screen.getByTestId('modal-start-over-button'))
    expect(navigate).toHaveBeenCalledTimes(1)
    expect(navigate).toHaveBeenCalledWith('/')
  })
})
