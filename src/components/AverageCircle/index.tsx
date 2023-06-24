import React from 'react'
import * as S from './styles'
const AverageCircle = (props: {value: number}) => {
  return (
    <S.CircleContainer>
      <S.CircleTwo>
         <p>{props.value * 10 + '%'}</p>
      </S.CircleTwo>
    </S.CircleContainer>
  )
}

export default AverageCircle