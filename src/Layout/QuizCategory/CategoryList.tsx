import { useState } from 'react'
import styled from 'styled-components/macro'
import { CategoriesType } from '.'

const OrderedListStyle = styled.ol`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`

const ListItem = styled.li<{ active: boolean }>`
  flex: 1 auto;
  width: auto;
  padding: 1.4rem;
  background: ${({ active }) => (active ? '#b0a3a3' : '#ccc')};
  margin-bottom: 0.6rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #b0a3a3;
  }
`

const CategoryList = ({
  categories,
  onClickCategory,
}: {
  categories: CategoriesType
  onClickCategory(id: number): void
}) => {
  const [activeItem, setActiveItem] = useState<number>()

  const selectCategory = (id: number): void => {
    onClickCategory(id)
    setActiveItem(id)
  }
  const renderList = categories.map((item, index) => {
    return (
      <ListItem
        key={`${index}${item}`}
        active={item.id === activeItem}
        onClick={() => selectCategory(item.id)}
      >
        {item.name}
      </ListItem>
    )
  })
  return (
    <div>
      {!!renderList.length && <OrderedListStyle>{renderList}</OrderedListStyle>}
    </div>
  )
}

export default CategoryList
