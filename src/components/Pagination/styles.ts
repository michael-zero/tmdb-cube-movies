import styled from 'styled-components'  

export const Container = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
`
export const Item = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 4px;
`

export const CustomBTN = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  :disabled{
    cursor: not-allowed;
  }
`