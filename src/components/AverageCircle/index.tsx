import React from 'react'
import * as S from './styles'

type Sizes = 'small' | 'medium' | 'large'

const AverageCircle = (props: {value: number | string, position: 'absolute' | 'relative', size: Sizes, onClick?: () => void }) => {

  const obterTamanho = (tamanho: 'small' | 'medium' | 'large') => {
    switch(tamanho){
      case 'small':
        return [{width: '40px', height: '40px'}, {width: '34px', height: '34px'}, {fontSize: '14px'}];
      case 'large': 
        return [{width: '90px', height: '90px'}, {width: '84px', height: '84px'}, {fontSize: '24px'}];
      case 'medium':
        return [{width: '60px', height: '60px'}, {width: '54px', height: '54px'}, {fontSize: '16px'}];
    }
  }
  return (
    <S.CircleContainer onClick={props.onClick} position={props.position} style={{position: props.position, ...obterTamanho(props.size)[0]}}>
      <S.CircleTwo style={{...obterTamanho(props.size)[1]}}>
         <p style={{...obterTamanho(props.size)[2]}}>{props.value}</p>
      </S.CircleTwo>
    </S.CircleContainer>
  )
}

export default AverageCircle