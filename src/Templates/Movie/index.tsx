import { GetServerSideProps } from "next";
import { TmdbServices } from "../../services/tmdb";
import { Movie, MyPageProps } from "../../types/movies";
import * as S from './styles'
import Tupla from "../../components/Tupla";
import { converterDataAmericanaParaBrasileira, converterIdiomaTMDB, converterMinutosParaHoras, formatarValor, mapearParaPortugues } from "../../utils/movies";
import Image from 'next/image'
import GenreComponent from "../../components/Genre";

function MovieTemplate({ movie }: MyPageProps) {

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const trailer = movie.videos.results.find((video) => video.type === 'Trailer' && video.site === 'YouTube');

  return (
    <S.Container style={{flexDirection: 'column', gap: '32px'}}>
      <S.Column>
        <S.Row 
        style={{alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px 8px 24px', backgroundColor: '#E6E6E6'}}>
        <S.Title>{movie.title}</S.Title> 
        <S.ReleaseDate>{converterDataAmericanaParaBrasileira(movie.release_date)}</S.ReleaseDate>
        </S.Row>
        
        <S.Row style={{backgroundColor: '#F2F2F2'}}>
          <S.BoxLeft style={{padding: '24px', gap: '24px', flexDirection: 'column'}}>
              <S.Column>
                <S.Subtitle>Sinopse</S.Subtitle>
                <S.Line/>
                <p>{movie.overview}</p>
              </S.Column>
              <S.Column>
                <S.Subtitle>Informações</S.Subtitle>
                <S.Line/>
                <S.Row style={{gap: '8px'}}>
                  <Tupla  chave={"Situação"} value={mapearParaPortugues(movie.status)}  key={""}/>
                  <Tupla  chave={"Idioma"} value={converterIdiomaTMDB(movie.original_language)}  key={""}/>
                  <Tupla  chave={"Duração"} value={converterMinutosParaHoras(movie.runtime)}  key={""}/>
                  <Tupla  chave={"Orçamento"} value={formatarValor(movie.revenue)}  key={""}/>
                  <Tupla  chave={"Receita"} value={formatarValor(movie.budget)}  key={""}/>
                  <Tupla  chave={"Lucro"} value={formatarValor(movie.revenue - movie.budget)}  key={""}/>
                </S.Row>
              </S.Column>
              <S.Row>
              <S.GenresContainer>
                  {
                    movie.genres.map(g => <GenreComponent key={g.id} genre={g.name}/>)
                  }
                </S.GenresContainer>
              </S.Row>
          </S.BoxLeft>
          <S.BoxRight>
          <S.ContainerImage>
            <Image 
            fill
            className='image'
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt='Movie image'/>
          </S.ContainerImage>
          </S.BoxRight>
        </S.Row>
      </S.Column>

      {trailer && (
        <iframe
          width="100%"
          height="450"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title="Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </S.Container>
  );
}


export default MovieTemplate;