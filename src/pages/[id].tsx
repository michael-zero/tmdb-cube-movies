import React from 'react'
import MovieTemplate from '../Templates/Movie';
import { GetServerSideProps } from 'next';
import {Movie} from '../types/movies'
import { TmdbServices } from '../services/tmdb';


interface MyPageProps {
  movie: Movie | null;
}

const Movie = ({movie}: MyPageProps) => {
  return (
   <MovieTemplate movie={movie}/>
  )
}


export const getServerSideProps: GetServerSideProps<MyPageProps> = async (context) => {
  const { id } = context.query;

  try {
    const response = await TmdbServices.getMovie(id?.toString() as string)
    const movie = response.data;
    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    return {
      props: {
        movie: null,
      },
    };
  }
};

export default Movie