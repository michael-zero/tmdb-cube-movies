import React from 'react'
import * as S from './styles'

const GenreComponent = ({genre}: {genre: string}) => {
  return (
    <S.Container>
      <S.GenreText>{genre}</S.GenreText>
    </S.Container>
  )
}

export default GenreComponent