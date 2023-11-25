'use client';

import { useTheme } from '@emotion/react';
import { createBaseFontStyle } from '../styles/fontStyle';
import type { HexColor, FontSize, FontBold, FontAlign, FontDecoration, FontStyle } from '../types';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  size?: FontSize;
  color?: HexColor;
  bold?: FontBold;
  align?: FontAlign;
  decoration?: FontDecoration;
  fontStyle?: FontStyle;
}

export const Heading = ({ children, ...restProps }: HeadingProps) => {
  const defaultTheme = useTheme();
  const {
    color = defaultTheme.colors.font,
    size = 'xl',
    bold = 500,
    align = 'start',
    decoration = 'none',
    fontStyle = 'normal',
    ...headingProps
  } = restProps;
  const baseFontStyle = createBaseFontStyle(size, color, bold, decoration, align, fontStyle);

  return (
    <>
      {size === 'xxl' && (
        <h1 css={baseFontStyle} {...headingProps}>
          {children}
        </h1>
      )}
      {size === 'xl' && (
        <h1 css={baseFontStyle} {...headingProps}>
          {children}
        </h1>
      )}
      {size === 'lg' && (
        <h1 css={baseFontStyle} {...headingProps}>
          {children}
        </h1>
      )}
      {size === 'md' && (
        <h1 css={baseFontStyle} {...headingProps}>
          {children}
        </h1>
      )}
      {size === 'sm' && (
        <h1 css={baseFontStyle} {...headingProps}>
          {children}
        </h1>
      )}
    </>
  );
};
