export const calculatePagination = ({
  currentPage,
  pageSize,
  totalPages
}: {
  currentPage: number;
  pageSize: number;
  totalPages: number;
}) => {
  const startPage = Math.max(1, currentPage - (currentPage % pageSize || pageSize) + 1);
  const endPage = Math.min(startPage + pageSize - 1, totalPages);

  return { startPage, endPage };
};
