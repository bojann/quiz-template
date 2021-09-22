import React, { useContext, useEffect, useState, MouseEvent } from 'react'
import QuestionList from './QuestionList'
import useHttp from 'Layout/hooks/use-http'
import QuizContext from 'store/quiz-context'
import ErrorModal from 'Layout/Error/ErrorModal'
import Backdrop from 'Layout/common/Backdrop'
import LoadingSpinner from 'Layout/common/LoadingSpinner'
import ValidationError from 'Layout/Error/ValidationError'
import Button from 'Layout/common/Button'
import Modal from 'Layout/Modal'
import { navigate } from 'hookrouter'
import styled from 'styled-components/macro'

export interface QuestionType {
  category: string
  type: string
  difficulty: 'easy' | 'medium' | 'hard'
  question: string
  correct_answer: string
  incorrect_answers: string[]
  selectedOption?: string
}

export interface AnswerType {
  isCorrect: boolean
  answer: string
}

export interface HttpQuestionsType {
  response_code: number
  results: QuestionType[]
}

const Head = styled.h3`
  text-align: center;
  margin: 3rem 0 2rem 0;
`

const ButtonStyled = styled(Button)`
  display: block;
  margin: 3rem auto 4rem;
`

const Questions = () => {
  const [questions, setQuestions] = useState<QuestionType[] | []>([])
  const [answers, setAnswers] = useState({})
  const [correctAnswers, setCorrectAnswers] = useState<AnswerType[]>([])
  const [validationError, setValidationError] = useState('')
  const { loading, error, getData } = useHttp()
  const quizCtx = useContext(QuizContext)
  if (quizCtx === undefined) {
    throw new Error(`QuizContext must be used within a QuizContext`)
  }
  const { quiz } = quizCtx

  useEffect(() => {
    const getQuestions = (data: HttpQuestionsType) => {
      const { results } = data
      if (!results.length) {
        throw new Error(`Oooops, where are the questions?`)
      }
      setQuestions(results)
    }
    getData(
      {
        url: `https://opentdb.com/api.php?amount=10&category=${quiz.categoryId}&difficulty=${quiz.difficulty}&type=boolean`,
      },
      getQuestions,
    )
  }, [getData, quiz.categoryId, quiz.difficulty])

  const handleClickSubmit = () => {
    const sumOfAnswers = Object.values(answers) as AnswerType[]
    const answerLength = sumOfAnswers.length
    if (questions.length !== answerLength) {
      setValidationError('Please answer on all questions')
    } else {
      const totalCorrectAnswers = sumOfAnswers.filter((obj) => obj.isCorrect)
      setCorrectAnswers(totalCorrectAnswers)
      setValidationError('')
    }
  }

  const handleClickAnswer = (questionIndex: number, answer: string) => {
    const question = {} as {
      [key: string]: { isCorrect: boolean; answer: string }
    }
    if (questions[questionIndex].correct_answer.toLowerCase() === answer) {
      question[questionIndex] = {
        isCorrect: true,
        answer,
      }
    } else {
      question[questionIndex] = {
        isCorrect: false,
        answer,
      }
    }
    setAnswers((prevState) => {
      return {
        ...prevState,
        ...question,
      }
    })
  }

  const handleClickModalButton = (ev: MouseEvent<HTMLButtonElement>) => {
    navigate('/')
  }

  return (
    <>
      {error && <ErrorModal>{error}</ErrorModal>}
      {!!correctAnswers.length && (
        <Modal onClickButton={handleClickModalButton}>
          <p>
            Your score is {correctAnswers.length}/{questions.length}
          </p>
        </Modal>
      )}
      {loading ? (
        <Backdrop>
          <LoadingSpinner data-testid="loading-spinner" />
        </Backdrop>
      ) : (
        <div>
          {!!questions.length && (
            <Head data-testid="category-title">
              Category - {questions[0].category}:
            </Head>
          )}
          <QuestionList
            questions={questions}
            onClickAnswer={handleClickAnswer}
            selectedAnswers={answers}
          />
          {!!validationError && (
            <ValidationError>{validationError}</ValidationError>
          )}
          <ButtonStyled
            testid="submit-button"
            size="medium"
            onClickButton={handleClickSubmit}
          >
            Submit answers
          </ButtonStyled>
        </div>
      )}
    </>
  )
}

export default Questions
