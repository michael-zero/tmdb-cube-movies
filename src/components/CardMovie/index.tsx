import React from 'react'
import styles from './index.module.css'
import { Genres, IMovie } from '../../types/movies'
import Image from 'next/image'
import GenreComponent from '../Genre'
import * as S from './styles'
import AverageCircle from '../AverageCircle'
import { converterDataAmericanaParaBrasileira } from '../../utils/movies'

const CardMovie = (props: {movie: IMovie, genres: Genres, onClick?: () => void}) => {

  function limitarTexto(texto:string, limite:number) {
    if (texto.length <= limite) {
      return texto; // Retorna o texto original se estiver dentro do limite
    } else {
      var textoLimitado = texto.slice(0, limite); // Obtém uma parte do texto até o limite
      return textoLimitado + '...'; // Adiciona reticências para indicar que foi limitado
    }
  }

  return (
      <S.Container onClick={props.onClick}>
        {/* image */}
        <S.Left>
          <Image 
          fill
          className='image'
          src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
          alt='Movie image'/>
        </S.Left>
        {/* other infos */}
        <S.Right>
          {/* circle */}
            <S.RightTop>
              <S.ContainerCircle>
                <AverageCircle size='medium' position='absolute' value={props.movie.vote_average * 10 + '%'}/>
              </S.ContainerCircle>
              <S.ContainerTitle>
                  <p>{props.movie.title}</p>
              </S.ContainerTitle>
            </S.RightTop>
            <S.RightBottom>
              <S.ReleaseDate>
                <p>{converterDataAmericanaParaBrasileira(props.movie.release_date)}</p>
              </S.ReleaseDate>
              <S.OverView>{limitarTexto(props.movie.overview, 300) || 'Nenhuma descrição encontrada.'}</S.OverView>
            </S.RightBottom>
            <div>
              <S.GenresContainer>
                  {
                    props.genres.map(g => <GenreComponent key={g.id} genre={g.name}/>)
                  }
                </S.GenresContainer>
            </div>
          </S.Right>
        </S.Container>
  )
}

export default CardMovie