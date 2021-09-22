import { getArrOfRandomNums } from '../utils'

describe('When fn invoked', () => {
  it('should return array of for random numbers', () => {
    expect(getArrOfRandomNums()).toHaveLength(4)
  })
})
