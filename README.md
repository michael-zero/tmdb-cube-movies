# Zero Movies

Aplicação frontend que consome informações da API do The Movie Database. 

## Recursos

- Listagem de filmes.
- Busca por filmes: nome, ano ou gênero.
- Informações gerais sobre filmes: oraçamentos, avaliação, duração do filme.
- Exibição do trailer, caso exista.

## Instalação

```yarn install```: execute esse comando na raiz do projeto para instalar todas as dependências. 
```yarn dev```: para executar a aplicação.

## Uso

Na tela inicial serão exibidos cinco filmes onde o usuário poderá pesquisar por nome, gênero ou ano de lançamento. 
Ao fim da página temos uma paginção, onde em cada página vinda da API são trazidos 20 filmes e foram subdividos e quatro parte, onde cada
uma exibe cinco filmes. E ao clicar em 'próxima página' ou 'página anterior' que será feita uma nova requisição para a nova página.
Ao clicar em filme, uma requisição será feita do lado do servidor trazendo informações específicas de um único filme, como trailer, lucros e etc.

## Contato

michaeldevjs@gmail.com

## Agradecimentos

Agradeça às pessoas ou organizações que ajudaram, inspiraram ou contribuíram de alguma forma para o projeto.

## Status do Projeto

Está concluído, todavia pode ser melhorado. 
1. Paginação que devido ao tempo não deu para usar a melhor implementação.
2. Padronizar totalmente para styled-components.



