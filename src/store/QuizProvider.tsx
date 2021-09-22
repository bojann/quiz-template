import QuizContext, { QuizType } from './quiz-context'
import { useState } from 'react'
import { LEVEL, DEFAULT_CATEGORY_ID } from 'Layout/constants'

interface QuizProviderTypes {
  children: React.ReactNode
}

const QuizProvider = (props: QuizProviderTypes) => {
  const [quiz, setQuiz] = useState<QuizType>({
    difficulty: LEVEL.EASY,
    categoryId: DEFAULT_CATEGORY_ID,
  })

  const selectQuiz = (props: QuizType) => {
    const { difficulty, categoryId } = props
    setQuiz({ difficulty, categoryId })
  }

  return (
    <QuizContext.Provider
      value={{
        selectQuiz,
        quiz,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  )
}

export default QuizProvider
