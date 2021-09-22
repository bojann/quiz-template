import React from 'react'
import styled from 'styled-components/macro'
import { QuestionType } from '.'

interface ListItemType {
  item: QuestionType
  index: number
  onChangeRadioInput: (
    ev: React.ChangeEvent<HTMLInputElement>,
    questionIndex: number,
  ) => void
  selectedAnswers: {
    [key: string]: { isCorrect: boolean; answer: string }
  }
}

const ListItmeStyled = styled.li`
  background: #cdcbb7;
  padding: 0.6rem 0.6rem 1.6rem 0.6rem;
  margin: 1.2rem;
  border-radius: 0.8rem;
  text-align: center;
  min-width: 40rem;
  max-width: 40rem;

  &:hover {
    background: #f0eed9;
  }

  @media (max-width: 768px) {
    min-width: auto;
    max-width: initial;
  }

  @media (min-width: 768px) and (max-width: 1112px) {
    justify-content: start;
  }
`

const ItemHeader = styled.div`
  background: #e8ae6f;
  display: flex;
  justify-content: center;
  border-radius: 0.6rem 0.6rem 0 0;
`

const Label = styled.label`
  &:hover {
    cursor: pointer;
  }
`

const Input = styled.input`
  &:hover {
    cursor: pointer;
  }
`

const ListItem = ({
  item,
  index,
  onChangeRadioInput,
  selectedAnswers,
}: ListItemType) => {
  return (
    <ListItmeStyled data-testid="category-item">
      <ItemHeader>
        <h4>Question {index + 1}</h4>
      </ItemHeader>
      <p>{item.question}</p>
      <div>
        <form>
          <Label>
            <Input
              data-testid={`radio-button-true-${index}`}
              type="radio"
              value="true"
              name="answer"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                onChangeRadioInput(ev, index)
              }}
              checked={selectedAnswers[index]?.answer === 'true'}
            />{' '}
            TRUE
          </Label>
          <Label>
            <Input
              data-testid={`radio-button-false-${index}`}
              type="radio"
              value="false"
              name="answer"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                onChangeRadioInput(ev, index)
              }}
              checked={selectedAnswers[index]?.answer === 'false'}
            />{' '}
            FALSE
          </Label>
        </form>
      </div>
    </ListItmeStyled>
  )
}

export default ListItem
