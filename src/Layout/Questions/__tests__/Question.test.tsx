import { render, screen, waitFor } from '@testing-library/react'
import QuizProvider from 'store/QuizProvider'
import Questions from '../index'

describe('When Question list renders', () => {
  beforeAll(() => {
    render(
      <QuizProvider>
        <Questions />
      </QuizProvider>,
    )
  })
  it('should show spinner while loading', () => {
    expect(screen.getByTestId('loading-spinner')).toBeVisible()

    waitFor(() => {
      expect(screen.queryByTestId('loading-spinner')).toBeNull()
      expect(screen.getByTestId('category-title')).toBeVisible()
    })
  })

  it('should show category title', () => {
    waitFor(() => {
      expect(screen.getByTestId('category-title')).toBeVisible()
    })
  })
  it('should show submit answer button', () => {
    waitFor(() => {
      expect(screen.queryByTestId('loading-spinner')).toBeNull()
      expect(screen.getByTestId('submit-button')).toBeVisible()
    })
  })
})
