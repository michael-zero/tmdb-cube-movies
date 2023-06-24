import React from 'react'
import * as S from './styles'
const AverageCircle = (props: {value: number, position: 'absolute' | 'relative', size:'small' | 'large'}) => {

  const obterTamanho = (tamanho: 'small' | 'large') => {
    switch(tamanho){
      case 'small':
        return [{width: '60px', height: '60px'}, {width: '54px', height: '54px'}, {fontSize: '16px'}];
      case 'large': 
        return [{width: '90px', height: '90px'}, {width: '84px', height: '84px'}, {fontSize: '30px'}];
    }
  }
  return (
    <S.CircleContainer position={props.position} style={{position: props.position, ...obterTamanho(props.size)[0]}}>
      <S.CircleTwo style={{...obterTamanho(props.size)[1]}}>
         <p style={{...obterTamanho(props.size)[2]}}>{props.value * 10 + '%'}</p>
      </S.CircleTwo>
    </S.CircleContainer>
  )
}

export default AverageCircle