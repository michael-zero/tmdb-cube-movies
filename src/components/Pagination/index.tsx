import React from 'react';
import * as S from './styles'
import AverageCircle from '../AverageCircle';

type Props = {
  postsPerPage: number, 
  totalPosts: number, 
  paginate:  (pageNumber: React.SetStateAction<number>) => void
  currentPage: number
}

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <S.Container className='pagination'>
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
      </S.Container>
    </nav>
  );
};

export default Pagination;