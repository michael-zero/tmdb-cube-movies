import React from 'react';
import * as S from './styles'
import AverageCircle from '../AverageCircle';

type Props = {
  postsPerPage: number, 
  totalPosts: number, 
  paginate:  (pageNumber: number) => void
  currentPage: number
  nextPage:  () => void
  prevPage:  () => void
}

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, prevPage, nextPage }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <S.Container className='pagination'>
        <p style={{cursor: 'pointer'}} onClick={prevPage}>Página anterior</p>
        {pageNumbers.map(number => (
          <S.Item key={number} className='page-item'>
            {
             currentPage === number ? 
             <AverageCircle onClick={() => paginate(number)} size='small' position='relative' value={number}/>
             :
             <p onClick={() => paginate(number)}>{number}</p>
            }
          </S.Item>
        ))}
        <p style={{cursor: 'pointer'}} onClick={nextPage}>Próxima página</p>

      </S.Container>
    </nav>
  );
};

export default Pagination;