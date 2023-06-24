import styled from 'styled-components'

export const GenresContainer = styled.div`
  display: flex;
  gap: 8px;
  padding-left: 24px;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  width: 78%;
  overflow: hidden;
`

export const RightTop = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    font-size: 28px;
 /* min-height: 50px; */
`
export const ContainerCircle = styled.div`
  position: relative;
  margin-left: 16px;
  width: 60px;
  min-height: 60px;
`
export const ContainerTitle = styled.div`
  margin-left: 16px;
  display: flex;
  height: 100%;
  align-items: flex-end;
`

export const OverView = styled.p`
  font-size: 16px;
  font-family: 'Lato' sans-serif;
`