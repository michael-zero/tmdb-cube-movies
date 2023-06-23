import { GetServerSideProps } from "next";
import { TmdbServices } from "../../services/tmdb";
import { Movie, MyPageProps } from "../../types/movies";

function MovieTemplate({ movie }: MyPageProps) {
  if (!movie) {
    return <div>Movie not found</div>;
  }

  const trailer = movie.videos.results.find((video) => video.type === 'Trailer' && video.site === 'YouTube');

  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>receita:  {movie.revenue - movie.budget}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>{movie.overview}</p>
      {trailer && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title="Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}


export default MovieTemplate;