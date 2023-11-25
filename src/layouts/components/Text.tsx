'use client';

import { useTheme } from '@emotion/react';
import { createBaseFontStyle } from '../styles/fontStyle';
import type { HexColor, FontSize, FontBold, FontAlign, FontDecoration, FontStyle } from '../types';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  as?: 'p' | 'span';
  size?: FontSize;
  color?: HexColor;
  bold?: FontBold;
  align?: FontAlign;
  decoration?: FontDecoration;
  fontStyle?: FontStyle;
}
export const Text = ({ children, ...restProps }: TextProps) => {
  const defaultTheme = useTheme();
  const {
    color = defaultTheme.colors.font,
    size = 'md',
    bold = 500,
    align = 'start',
    decoration = 'none',
    fontStyle = 'normal',
    ...textProps
  } = restProps;
  const Component = textProps.as ?? 'p';
  const baseFontStyle = createBaseFontStyle(size, color, bold, decoration, align, fontStyle);
  return (
    <Component css={baseFontStyle} {...textProps}>
      {children}
    </Component>
  );
};
