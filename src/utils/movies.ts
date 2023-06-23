import { Genre, Genres } from "../types/movies";

export function searchObjectsByIds(objectList: Genre[], idList: number[]) {
  const filteredObjects = objectList.filter((object) =>
    idList.includes(object.id)
  );
  return filteredObjects;
}

export function isNumeric(value: string) {
  return /^-?\d+(\.\d+)?$/.test(value);
}

export function extractMovieInfo(movieName: string) {
  const numberMatches = movieName.match(/\d+/g);
  const year = numberMatches ? numberMatches[0] : null;
  const name = movieName.replace(/\d+/g, '').trim();

  return { name, year };
}

export function getGenreIdByName(genres: Genres, genreName: string) {
  const genre = genres.find(genre => genre.name.toLowerCase() === genreName.toLowerCase());

  if (genre) {
    return genre.id;
  } else {
    return null;
  }
}