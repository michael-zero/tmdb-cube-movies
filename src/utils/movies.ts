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

export function mapearParaPortugues(valorEmIngles: string): string {
  const mapeamento: Record<string, string> = {
    Rumored: 'Rumor',
    Planned: 'Planejado',
    'In Production': 'Em Produção',
    'Post Production': 'Pós-Produção',
    Released: 'Lançado',
    Canceled: 'Cancelado',
    Scheduled: 'Agendado',
  };

  return mapeamento[valorEmIngles] || valorEmIngles;
}

export function formatarValor(valor: number): string {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(valor);
}

export function converterMinutosParaHoras(tempoEmMinutos: number): string {
  const horas = Math.floor(tempoEmMinutos / 60);
  const minutos = tempoEmMinutos % 60;

  return `${horas}h ${minutos}min`;
}

export function converterDataAmericanaParaBrasileira(dataAmericana: string): string {
  const partes = dataAmericana.split('-');
  const ano = partes[0];
  const mes = partes[1];
  const dia = partes[2];

  return `${dia}/${mes}/${ano}`;
}
export function converterIdiomaTMDB(originalLanguage: string): string {
  const idiomas: Record<string, string> = {
    en: "Inglês",
    es: "Espanhol",
    fr: "Francês",
    pt: "Português",
    de: "Alemão",
    it: "Italiano",
    ja: "Japonês",
    ko: "Coreano",
    zh: "Chinês",
    ru: "Russo",
    hi: "Hindi"
  };

  const idioma = idiomas[originalLanguage.toLowerCase()] || "Desconhecido";
  return idioma;
}
