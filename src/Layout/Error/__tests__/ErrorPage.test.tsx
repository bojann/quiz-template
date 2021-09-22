import { fireEvent, render, screen } from '@testing-library/react'
import { navigate } from 'hookrouter'
import ErrorPage from '../ErrorPage'

jest.mock('hookrouter', () => ({
  navigate: jest.fn(),
}))

describe('when ErrorPage renders', () => {
  beforeEach(() => {
    render(<ErrorPage />)
  })

  it('should show content Page not found', () => {
    expect(screen.getByTestId('error-page-text')).toBeVisible()
    expect(screen.getByTestId('error-page-text')).toHaveTextContent(
      'Page not found',
    )
  })

  it('should navigate to home when link clicked', () => {
    expect(screen.getByTestId('return-link')).toBeVisible()
    fireEvent.click(screen.getByTestId('return-link'))
    expect(navigate).toHaveBeenCalledTimes(1)
    expect(navigate).toHaveBeenCalledWith('/')
  })
})
