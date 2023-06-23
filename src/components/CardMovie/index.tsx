import React from 'react'
import styles from './index.module.css'
import { Genres, IMovie } from '../../types/movies'
import Image from 'next/image'
import GenreComponent from '../Genre'
import * as S from './styles'

const CardMovie = (props: {movie: IMovie, genres: Genres}) => {

  function limitarTexto(texto:string, limite:number) {
    if (texto.length <= limite) {
      return texto; // Retorna o texto original se estiver dentro do limite
    } else {
      var textoLimitado = texto.slice(0, limite); // Obtém uma parte do texto até o limite
      return textoLimitado + '...'; // Adiciona reticências para indicar que foi limitado
    }
  }

  return (
      <div className={styles.container}>
        {/* image */}
        <div className={styles.left}>
          <Image 
          fill
          className='image'
          src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
          alt='Movie image'/>
        </div>
        {/* other infos */}
        <div className={styles.right}>
          {/* circle */}
          <div className={styles.circle}>
            <div className={styles.circleTwo}>
              <p>{props.movie.vote_average * 10 + '%'}</p>
            </div>
          </div>

            <div className={styles.rightTop}>
              <p>{props.movie.title}</p>
            </div>
            <div className={styles.rightBottom}>
              <div className={styles.releaseDate}>
                <p>{props.movie.release_date}</p>
              </div>
              <p className={styles.overview}>{limitarTexto(props.movie.overview, 380) || 'Nenhuma descrição encontrada.'}</p>
            </div>
            <div>
              <S.GenresContainer>
                  {
                    props.genres.map(g => <GenreComponent key={g.id} genre={g.name}/>)
                  }
                </S.GenresContainer>
            </div>
          </div>
        </div>
  )
}

export default CardMovie