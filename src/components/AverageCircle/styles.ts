import styled from 'styled-components'

export const CircleContainer = styled.div<{position: string}>`
    transform: ${props => props.position === 'absolute' ? 'translateY(50%)' : 0};
    /* left: ${props => props.position === 'absolute' ? '2%' : 0}; */
    background-color: var(--primary-color);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CircleTwo = styled.div`
  top: 6%;
  left: 2%;
  border: 4px solid var(--secondary-color);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: var(--secondary-color);
`