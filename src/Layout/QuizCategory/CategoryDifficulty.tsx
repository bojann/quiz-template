import { LEVEL } from 'Layout/constants'
import React from 'react'
import styled from 'styled-components/macro'

const Select = styled.select`
  padding: 0.4rem 0.6rem;
  border: 2px solid #3d3d3d;
`

const CategoryDifficulty = ({
  selectQuizDifficulty,
}: {
  selectQuizDifficulty: (diffLevel: string) => void
}) => {
  const selectDifficultyLevel = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    selectQuizDifficulty(ev.target.value)
  }

  return (
    <div>
      <Select name="difficulty" onChange={selectDifficultyLevel}>
        <option key={LEVEL.EASY} value={LEVEL.EASY}>
          {LEVEL.EASY}
        </option>
        <option key={LEVEL.MEDIUM} value={LEVEL.MEDIUM}>
          {LEVEL.MEDIUM}
        </option>
        <option key={LEVEL.HARD} value={LEVEL.HARD}>
          {LEVEL.HARD}
        </option>
      </Select>
    </div>
  )
}

export default CategoryDifficulty
