import {AxiosResponse} from 'axios';
import {apiTMDB} from '../apis/tmdbapi';
import { Genres, IMovie, IPageResult, Movie} from '../../types/movies';

const baseUrl = '';
export class TmdbServices {
	
	static async getMovies(page: number): Promise<AxiosResponse<IPageResult<IMovie>>> {
		return apiTMDB.get(`/movie/now_playing?language=pt-br&page=${page}`);
	}

	static async getMoviesQuery(query: string): Promise<AxiosResponse<IPageResult<IMovie>>> {
		return apiTMDB.get(`/search/movie?query=${query}&language=pt-br&page=1`);
	}
	static async getMoviesByYear(year: string): Promise<AxiosResponse<IPageResult<IMovie>>> {
		return apiTMDB.get(`/discover/movie?year=${year}`);
	}
	static async getMoviesBygGenre(genreId: string): Promise<AxiosResponse<IPageResult<IMovie>>> {
		return apiTMDB.get(`/discover/movie?with_genres=${genreId}`);
	}
	static async getMovie(idMovie: string): Promise<AxiosResponse<Movie>> {
		return apiTMDB.get(`/movie/${idMovie}?append_to_response=videos&language=pt-br`);
	}
	static async getAllGenres(): Promise<AxiosResponse<{genres: Genres}>> {
		return apiTMDB.get(`/genre/movie/list?language=pt-br`)
	}
}
