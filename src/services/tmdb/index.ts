import {AxiosResponse} from 'axios';
import {apiTMDB} from '../apis/tmdbapi';
import { IMovie, IPageResult} from '../../types/movies';
// import objectToParams from '../../../utils/ObjectToParams';

const baseUrl = '/movie/now_playing?language=pt-br&page=1';

export class TmdbServices {
	static async getMovies(): Promise<AxiosResponse<IPageResult<IMovie>>> {
		return apiTMDB.get(baseUrl);
	}

	static async getMoviesQuery(query: string): Promise<AxiosResponse<IPageResult<IMovie>>> {
		return apiTMDB.get(`/search/movie?query=${query}`)
	}
	static async getAllGenres(): Promise<AxiosResponse<any>> {
		return apiTMDB.get(`/genre/movie/list?language=pt-br`)
	}
}
