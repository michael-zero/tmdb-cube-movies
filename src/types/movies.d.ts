export interface IPageResult<T>{
  dates: {
    maximum?: string
    minimum?: string
  }
  page: number 
  results: T[]
  total_pages: number 
  total_results: number
}

export interface IMovie {
  adult: boolean
  backdrop_path: string 
  genre_ids: number[]
  id: number 
  original_language: string 
  original_title: string 
  overview: string 
  popularity: number 
  poster_path: string 
  release_date: string 
  title: string 
  video: boolean
  vote_average: number 
  vote_count: number
}

export interface MyPageProps {
  movie: Movie | null;
}


export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  runtime: number;
  vote_average: number;
  status: 'Rumored'
  | 'Planned'
  | 'In Production'
  | 'Post Production'
  | 'Released'
  | 'Canceled'
  | 'Scheduled';
  
  genres: Genres;
  revenue: number
  budget: number
  videos: {
    results: {
      key: string;
      site: string;
      type: string;
    }[];
  };
}

export type Genre = {
  name: string 
  id: number
}

export type Genres = Genre[]