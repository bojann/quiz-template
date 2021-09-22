import React, { useContext } from 'react'
import CategoryList from './CategoryList'
import styled from 'styled-components/macro'
import CategoryDifficulty from './CategoryDifficulty'
import Button from '../common/Button'
import { useEffect, useState } from 'react'
import { navigate } from 'hookrouter'
import useHttp from 'Layout/hooks/use-http'
import Backdrop from 'Layout/common/Backdrop'
import LoadingSpinner from 'Layout/common/LoadingSpinner'
import ErrorModal from 'Layout/Error/ErrorModal'
import QuizContext, { QuizType } from '../../store/quiz-context'
import { getArrOfRandomNums } from 'Layout/utils/utils'
import { LEVEL } from 'Layout/constants'
import ValidationError from 'Layout/Error/ValidationError'

interface CategoryType {
  id: number
  name: string
}
export type CategoriesType = CategoryType[] | []

interface HttpCategoriesType {
  trivia_categories: CategoryType[]
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 60%;
    font-size: 1.4rem;
  }
`

const CategoryFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

const QuizCategory = () => {
  const [quiz, setQuiz] = useState<QuizType>({ difficulty: LEVEL.EASY })
  const [categories, setCategories] = useState<CategoriesType>([])
  const [validationError, setValidationError] = useState('')
  const { loading, error, getData } = useHttp()
  const quizCtx = useContext(QuizContext)
  if (quizCtx === undefined) {
    throw new Error(`QuizContext must be used within a QuizContext`)
  }

  useEffect(() => {
    const getCategories = (data: HttpCategoriesType) => {
      const { trivia_categories } = data
      const randomCategoryList = getArrOfRandomNums()
      const randomCategories = randomCategoryList.map(
        (item) => trivia_categories[item],
      )
      setCategories(randomCategories)
    }
    getData({ url: 'https://opentdb.com/api_category.php' }, getCategories)
  }, [getData])

  const handleClickBttn = () => {
    if (quiz && quiz.categoryId) {
      quizCtx.selectQuiz(quiz)
      navigate('/questions')
    } else {
      setValidationError('Please select only one category')
    }
  }

  const handleClickCategory = (id: number) => {
    setValidationError('')
    setQuiz((prevState) => {
      return { ...prevState, categoryId: id }
    })
  }

  const handleClickDifficulty = (diffLevel: string) => {
    setQuiz((prevState) => {
      return { ...prevState, difficulty: diffLevel }
    })
  }

  return (
    <Container>
      <h2>Quiz Categories</h2>

      {error && <ErrorModal>{error}</ErrorModal>}
      {loading && (
        <Backdrop>
          <LoadingSpinner />
        </Backdrop>
      )}
      <CategoryList
        categories={categories}
        onClickCategory={handleClickCategory}
      />
      {!!validationError && (
        <ValidationError>{validationError}</ValidationError>
      )}
      <CategoryFooter>
        <CategoryDifficulty selectQuizDifficulty={handleClickDifficulty} />
        <Button testid="start-quiz-button" onClickButton={handleClickBttn}>
          Start Quiz
        </Button>
      </CategoryFooter>
    </Container>
  )
}

export default QuizCategory
