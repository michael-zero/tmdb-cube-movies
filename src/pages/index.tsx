import React from 'react'
import type { NextPage } from 'next'
import { TmdbServices } from '../services/tmdb'
import { IMovie } from '../types/movies'
import CardMovie from '../components/CardMovie'
import styles from './page.module.css'

const Home: NextPage = () => {
  const [movies, setMovies] = React.useState<IMovie[]>([])
 
  React.useEffect(() => {
    TmdbServices.getMovies().then(response => {
      const {data} = response
      setMovies(data.results)
    }).catch(e => console.log(e))
  }, [])  
  return (
    <main className={styles.main}>
    <section className={styles.moviesContainer}>
    {
      movies.map(movie => {
        return <CardMovie key={movie.original_title} movie={movie}/>
      })
    }
    </section>
  </main>
  )
}

export default Home
