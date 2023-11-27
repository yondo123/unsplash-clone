export const createRange = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);
