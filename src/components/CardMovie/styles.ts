import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  background-color: var(--terciary-color);
  max-height: 240px;
  width: 100%;
  max-width: 750px;
  min-width: 400px;

 
`

export const Left = styled.div`
    width: 22%;
    position: relative;
    height: 240px;

  .image {
      width: 100%;
      height: 100%;
      position: relative !important;
      object-fit: cover; 
  }

  @media(max-width: 400px){
    display: none;
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  width: 78%;
  overflow: hidden;

  @media(max-width: 400px){
   width: 100%;
  }
`

export const RightBottom = styled.div`
    display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 24px 24px 24px; 
  background-color: var(--terciary-color);
  min-height: 140px;
`
export const ReleaseDate = styled.div`
   margin-top: 6px;
  margin-left: 70px;
  font-weight: 300;
  color: #B8B8B8;
`
export const GenresContainer = styled.div`
  display: flex;
  gap: 8px;
  padding-left: 24px;

  @media(max-width: 400px){
    display: none;
  }
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