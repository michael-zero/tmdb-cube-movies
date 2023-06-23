import {AxiosResponse} from 'axios';
import {apiTMDB} from '../apis/tmdbapi';
import { Genres, IMovie, IPageResult} from '../../types/movies';
// import objectToParams from '../../../utils/ObjectToParams';

const baseUrl = '';
const url = 'https://api.themoviedb.org/3/search/movie?query=a%C3%A7%C3%A3o&include_adult=false&language=pt-br&primary_release_year=2020&page=1'
export class TmdbServices {
	
	static async getMovies(): Promise<AxiosResponse<IPageResult<IMovie>>> {
		return apiTMDB.get('/movie/now_playing?language=pt-br&page=1');
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
	static async getMovie(idMovie: string): Promise<AxiosResponse<any>> {
		return apiTMDB.get(`/movie/${idMovie}?append_to_response=videos&language=pt-br`);
	}

	// static async getMoviesQuery(query: string): Promise<AxiosResponse<IPageResult<IMovie>>> {
	// 	return apiTMDB.get(`/search/movie?query=${query}`)
	// }

	static async getAllGenres(): Promise<AxiosResponse<{genres: Genres}>> {
		return apiTMDB.get(`/genre/movie/list?language=pt-br`)
	}
}
