import React from 'react'
import type { NextPage } from 'next'
import { TmdbServices } from '../services/tmdb'
import { IMovie } from '../types/movies'
import CardMovie from '../components/CardMovie'
import styles from './page.module.css'
import InputComponent from '../components/Input'

const Home: NextPage = () => {
  const [movies, setMovies] = React.useState<IMovie[]>([])
  const [query, setQuery] = React.useState('')
 
  const searchMovies = async (query: string) => {
    console.log(query)
    try {
      if(query){
        let response = await TmdbServices.getMoviesQuery(query)
        const {data} = response
        setMovies(data.results)
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
    TmdbServices.getAllGenres()
    searchMovies(query)
  }, [query])  



  return (
    <main className={styles.main}>
    <InputComponent placeholder='Busque um filme por nome, ano ou gênero' value={query} onChange={e => setQuery(e.target.value)}/>
    <section className={styles.moviesContainer}>
    {
      movies.map((movie, index) => {
        return <CardMovie key={index} movie={movie}/>
      })
    }
    </section>
  </main>
  )
}

export default Home
