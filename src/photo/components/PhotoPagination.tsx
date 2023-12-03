'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { PaginationContainer, PaginationList, PaginationItem } from '@photo/styles/photoPaginationStyle';
import { Button } from '@layouts/components';
import { ArrowLeft, ArrowRight } from '@layouts/icons';
import { createRange } from '@shared/utils/array';
import { calculatePagination } from '../utils/calculatePagination';

interface PhotoPaginationProps {
  totalPages: number;
  pageSize: number;
}

export const PhotoPagination = ({ totalPages, pageSize }: PhotoPaginationProps) => {
  const FIRST_PAGE = 1;
  const router = useRouter();
  const params = useSearchParams();
  const currentPage = params.get('page') ? Number(params.get('page')) : FIRST_PAGE;
  const { startPage, endPage } = calculatePagination({ currentPage, totalPages, pageSize });
  const pageNumbers = createRange(startPage, endPage);

  const movePage = (page: number) => {
    router.push(`/?page=${page}`);
  };

  const movePrevPage = () => {
    const prevPage = currentPage - 1;
    router.push(`/?page=${prevPage}`);
  };

  const moveNextPage = () => {
    const nextPage = currentPage + 1;
    router.push(`/?page=${nextPage}`);
  };

  const pageList = pageNumbers.map(page => (
    <PaginationItem key={page}>
      <Button
        variant="ghost"
        disabled={page === currentPage}
        onClick={() => {
          movePage(page);
        }}
      >
        {page}
      </Button>
    </PaginationItem>
  ));

  return (
    <PaginationContainer>
      <PaginationList>
        <Button variant="ghost" disabled={currentPage <= 1} onClick={movePrevPage}>
          <ArrowLeft />
        </Button>
        {pageList}
        <Button variant="ghost" disabled={currentPage >= totalPages} onClick={moveNextPage}>
          <ArrowRight />
        </Button>
      </PaginationList>
    </PaginationContainer>
  );
};
