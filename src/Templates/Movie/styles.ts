import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px;
  max-width: 1100px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
export const Row = styled.div`
  display: flex;
`
export const BoxLeft = styled.div`
  width: 70%;
  display: flex;
`
export const BoxRight = styled.div`
  width: 30%;
`

export const ContainerImage = styled.div`
  position: relative;
  .image {
      width: 100%;
      height: 100%;
      position: relative !important;
      object-fit: contain; 
  }
`

export const Title = styled.h1`
  color: var(--primary-color);
`

export const Subtitle = styled.h2`
  color: #3075A0;
`
export const ReleaseDate = styled.p`
  font-size: 18px;
`

export const Line = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid #B2EFEE;
  margin-top: 4px;
  margin-bottom: 16px;
`
export const GenresContainer = styled.div`
  display: flex;
  gap: 8px;
`