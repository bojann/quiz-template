import React from 'react'

export interface QuizType {
  difficulty?: string
  categoryId?: number
}

export interface QuizContextType {
  quiz: QuizType
  selectQuiz: (props: QuizType) => void
}
const QuizContext = React.createContext<QuizContextType | undefined>(undefined)

export default QuizContext
