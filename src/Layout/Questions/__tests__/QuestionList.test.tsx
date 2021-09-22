import { fireEvent, render, screen } from '@testing-library/react'
import QuestionList from '../QuestionList'
import questionsMock from '../__mocks__/questionsMock'

describe('When data is loaded and loading spinner hidden', () => {
  beforeEach(() => {
    const onClickAnswer = jest.fn()
    render(
      <QuestionList
        questions={questionsMock}
        onClickAnswer={onClickAnswer}
        selectedAnswers={{
          0: { isCorrect: true, answer: 'False' },
          1: { isCorrect: true, answer: 'False' },
        }}
      />,
    )
  })
  it('should show list of questions', () => {
    expect(screen.getByTestId('category-list')).toBeVisible()
  })
  it('should show 2 cards with questions', () => {
    expect(screen.getAllByTestId('category-item')).toHaveLength(2)
  })
  it('should update radio buttons accordingly', () => {
    const trueButton = screen.getByTestId('radio-button-true-0')
    const falseButton = screen.getByTestId('radio-button-false-0')

    expect(trueButton).toBeVisible()
    expect(falseButton).toBeVisible()

    fireEvent.change(trueButton, { target: { value: 'false' } })
    expect(trueButton.value).toBe('false')

    fireEvent.change(falseButton, { target: { value: 'true' } })
    expect(falseButton.value).toBe('true')
  })
})
