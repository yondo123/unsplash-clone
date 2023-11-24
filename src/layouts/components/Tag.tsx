'use client';

import { useTheme } from '@emotion/react';
import { createTagStyle } from '../styles/tagStyle';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  backgroundColor?: `#${string}`;
}

export const Tag = ({ children, backgroundColor, ...restProps }: TagProps) => {
  const defaultTheme = useTheme();
  return (
    <span css={createTagStyle(defaultTheme, backgroundColor)} {...restProps}>
      {children}
    </span>
  );
};
