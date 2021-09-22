import React from 'react'
import styled from 'styled-components/macro'
import { QuestionType } from '.'
import ListItem from './QuestionListItem'

const List = styled.ol`
  list-style: none;
  width: 80%;
  margin: 0 auto;
  padding: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1112px) {
    width: 90%;
  }
`

const QuestionList = ({
  questions,
  onClickAnswer,
  selectedAnswers,
}: {
  questions: QuestionType[]
  onClickAnswer: (questionIndex: number, answer: string) => void
  selectedAnswers: {
    [key: string]: { isCorrect: boolean; answer: string }
  }
}) => {
  const onChangeRadioInput = (
    ev: React.ChangeEvent<HTMLInputElement>,
    questionIndex: number,
  ) => {
    const answer = ev.target.value
    onClickAnswer(questionIndex, answer)
  }
  const renderList = questions.map((item, index) => (
    <ListItem
      key={`${item.category}${index}`}
      item={item}
      index={index}
      onChangeRadioInput={onChangeRadioInput}
      selectedAnswers={selectedAnswers}
      data-testid="question-item"
    />
  ))

  return <List data-testid="category-list">{renderList}</List>
}

export default QuestionList
