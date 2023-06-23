import styled from 'styled-components'

export const Input = styled.input`
  cursor: pointer;
  font-size: 16px;
  border: none;
  outline: none;
  margin: 0;
  padding: 16px;
  border-radius: 24px;
  background-color: #EBEBEB;
  min-width: inherit;

  :focus{
    background-color: red;
  }

`

export const ContainerInput = styled.div`
  min-width: 100%;
 :focus-within{
      outline: 1px solid var(--secondary-color) ;
  }
`