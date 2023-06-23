import React, { ReactNode, useState } from "react";
import { Genres } from "../types/movies";

//#######################################################
// CRIACAO DO CONTEXTO E SUAS PROPRIEDADES
//#######################################################
type ContextProps = {
  genres: any;
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

  //retorna o provedor de dados realmente
  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
};

export function useUserContext() {
  const context = React.useContext(MoviesContext);

  if (typeof context === "undefined") {
    throw new Error("useUserContext must be used within an UserContext");
  }

  return context;
}
