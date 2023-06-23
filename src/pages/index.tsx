import React from 'react'
import type { NextPage } from 'next'
import { TmdbServices } from '../services/tmdb'
import { IMovie } from '../types/movies'
import CardMovie from '../components/CardMovie'
import styles from './page.module.css'
import InputComponent from '../components/Input'
import { useMoviesContext } from '../contexts/userMovies'
import { getGenreIdByName, isNumeric, searchObjectsByIds } from '../utils/movies'

const Home: NextPage = () => {
  const {genres} = useMoviesContext()
  const [movies, setMovies] = React.useState<IMovie[]>([])
  const [query, setQuery] = React.useState('')
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | undefined>(undefined);

  function delayedSearchMovies(value: string) {
    clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      searchMovies(value);
    }, 2000);

    setTimeoutId(newTimeoutId);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setQuery(value);
    delayedSearchMovies(value);
  }

  const searchMovies = async (query: string) => {
    try {
      if(query.length >= 3){
      // by year
      if(isNumeric(query) && query.length === 4){
        let response = await TmdbServices.getMoviesByYear(query)
        const {data} = response
        setMovies(data.results)
      }
      else if(getGenreIdByName(genres, query)){
        let id = getGenreIdByName(genres, query)
        let response = await TmdbServices.getMoviesBygGenre(id?.toString() as string)
        const {data} = response
        setMovies(data.results)
      }
      //by name
      else if(query){
        let response = await TmdbServices.getMoviesQuery(query)
        const {data} = response
        setMovies(data.results)
    }
    }else{
          getAllMovies()
        }
    } catch (error) {
      console.error(error);
    }
  };

  const getAllMovies = () => {
    TmdbServices.getMovies().then(response => {
      const {data} = response
      setMovies(data.results)
    }).catch(e => console.log(e))
  }

  

  React.useEffect(() => {
    getAllMovies()
  }, [])  


 

  return (
    <main className={styles.main}>
    <InputComponent placeholder='Busque um filme por nome, ano ou gênero' value={query} onChange={handleInputChange}/>
    <section className={styles.moviesContainer}>
    {
      movies.map((movie, index) => {
        return <CardMovie genres={searchObjectsByIds(genres, movie.genre_ids)} key={index} movie={movie}/>
      })
    }
    </section>
  </main>
  )
}

export default Home


