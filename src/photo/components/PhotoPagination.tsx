'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { PaginationContainer, PaginationList, PaginationItem } from '@photo/styles/photoPaginationStyle';
import { Button, Text } from '@layouts/components';
import { ArrowLeft, ArrowRight } from '@layouts/icons';
import { createRange } from '@shared/utils/array';
import { useTheme } from '@emotion/react';
import { calculatePagination } from '../utils/calculatePagination';

interface PhotoPaginationProps {
  totalPages: number;
  pageSize: number;
}

export const PhotoPagination = ({ totalPages, pageSize }: PhotoPaginationProps) => {
  const FIRST_PAGE = 1;
  const { colors } = useTheme();
  const router = useRouter();
  const params = useSearchParams();
  const currentPage = params.get('page') ? Number(params.get('page')) : FIRST_PAGE;
  const { startPage, endPage } = calculatePagination({ currentPage, totalPages, pageSize });
  const pageNumbers = createRange(startPage, endPage);

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
      <Link href={`/?page=${page}`}>
        <Text size="xl" color={page === currentPage ? colors.black : colors.font}>
          {page}
        </Text>
      </Link>
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
