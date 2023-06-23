import React, { ReactNode, useState } from "react";
import { Genres } from "../types/movies";
import { TmdbServices } from "../services/tmdb";

//#######################################################
// CRIACAO DO CONTEXTO E SUAS PROPRIEDADES
//#######################################################
type ContextProps = {
  genres: Genres;
};

type Props = {
  children: ReactNode;
};


//criacao de um contexto tipado para que seja possivel armazenar os dados a serem compartilhados
const MoviesContext = React.createContext<ContextProps | undefined>(
  {} as ContextProps
);

// Criando o Componente Para que seja possível compartilhar as informações com os componentes filhos ..
export const MoviesProvider = ({ children }: Props) => {

  const [genres, setGenres] = useState<Genres>([]);

  const value = {
    genres,
  };

  const getAllGenres = async () => {
    let {data} = await TmdbServices.getAllGenres()
    setGenres(data.genres)
  }
  React.useEffect(() => {
    getAllGenres()
  }, [])

  //retorna o provedor de dados realmente
  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
};

export function useMoviesContext() {
  const context = React.useContext(MoviesContext);



  if (typeof context === "undefined") {
    throw new Error("useMoviesContext must be used within an MoviesContext");
  }

  return context;
}
