import { GetServerSideProps } from "next";
import { TmdbServices } from "../../services/tmdb";
import { Movie, MyPageProps } from "../../types/movies";
import * as S from './styles'
import Tupla from "../../components/Tupla";
import { converterDataAmericanaParaBrasileira, converterMinutosParaHoras, formatarValor, mapearParaPortugues } from "../../utils/movies";

function MovieTemplate({ movie }: MyPageProps) {
  if (!movie) {
    return <div>Movie not found</div>;
  }

  const trailer = movie.videos.results.find((video) => video.type === 'Trailer' && video.site === 'YouTube');

  return (
    <S.Container>
      <S.Column>
        <S.Row><h1>{movie.title}</h1> {converterDataAmericanaParaBrasileira(movie.release_date)}</S.Row>
        <S.Row>
          <S.BoxLeft>
              <S.Column>
                <h2>Sinopse</h2>
                <p>{movie.overview}</p>
              </S.Column>
              <S.Column>
                <h2>Informações</h2>
                <S.Row>
                  <Tupla  chave={"Situação"} value={mapearParaPortugues(movie.status)}  key={""}/>
                  <Tupla  chave={"Idioma"} value={movie.status}  key={""}/>
                  <Tupla  chave={"Duração"} value={converterMinutosParaHoras(movie.runtime)}  key={""}/>
                  <Tupla  chave={"Orçamento"} value={formatarValor(movie.revenue)}  key={""}/>
                  <Tupla  chave={"Receita"} value={formatarValor(movie.budget)}  key={""}/>
                  <Tupla  chave={"Lucro"} value={formatarValor(movie.revenue - movie.budget)}  key={""}/>
                </S.Row>
              </S.Column>
          </S.BoxLeft>
          <S.BoxRight></S.BoxRight>
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