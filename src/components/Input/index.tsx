import React from 'react'
import styles from './input.module.css'
import * as S  from './styles'

type InputProps = {
  placeholder: string
} & React.ComponentProps<'input'>

const InputComponent = ({placeholder, ...rest}: InputProps) => {
  return (
    <S.ContainerInput>
      <S.Input placeholder={placeholder} value={rest.value} onChange={rest.onChange}/>
    </S.ContainerInput>
  )
}

export default InputComponent