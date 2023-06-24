import React from 'react'
import type { NextPage } from 'next'
import { TmdbServices } from '../services/tmdb'
import { IMovie } from '../types/movies'
import CardMovie from '../components/CardMovie'
import InputComponent from '../components/Input'
import { useMoviesContext } from '../contexts/userMovies'
import { getGenreIdByName, isNumeric, searchObjectsByIds } from '../utils/movies'
import { useRouter } from 'next/router'
import Pagination from '../components/Pagination'
import * as S from './styles'

const Home: NextPage = () => {
  const route = useRouter()
  const {genres} = useMoviesContext()
  const [movies, setMovies] = React.useState<IMovie[]>([])
  const [query, setQuery] = React.useState('')
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | undefined>(undefined);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentPageRqst, setCurrentPageRsqt] = React.useState(1);
  const [moviesPerPage] = React.useState(5);


  const indexOfLastPost = currentPage * moviesPerPage;
  const indexOfFirstPost = indexOfLastPost - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstPost, indexOfLastPost);

  function isMultiploDeQuatro(numero: number) {
    return numero % 4 === 0;
  }

  // Change page
  const paginate = (pageNumber: number) => {
    if(isMultiploDeQuatro(pageNumber)){
      setCurrentPageRsqt(currentPageRqst+1)
    }
    setCurrentPage(pageNumber)
  };
  
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
    TmdbServices.getMovies(currentPageRqst).then(response => {
      const {data} = response
      setMovies(data.results)
    }).catch(e => console.log(e))
  }

  React.useEffect(() => {
    getAllMovies()
  }, [currentPageRqst])  

  const nextPage = () => {
    setCurrentPageRsqt(p => p + 1)
  }

  const prevPage = () => {
      setCurrentPageRsqt(p => p - 1)
  }

  return (
    <S.Section>
    <InputComponent placeholder='Busque um filme por nome, ano ou gênero' value={query} onChange={handleInputChange}/>
    <S.MoviesContainer>
    {
      currentMovies.map((movie, index) => {
        return <CardMovie onClick={() => route.push(`/${movie.id}`)} genres={searchObjectsByIds(genres, movie.genre_ids)} key={index} movie={movie}/>
      })
    }
    </S.MoviesContainer>
    <footer>
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
        postsPerPage={moviesPerPage}
        totalPosts={movies.length}
        paginate={paginate}
      />

    </footer>
  </S.Section>
  )
}

export default Home


