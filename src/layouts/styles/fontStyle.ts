import { css } from '@emotion/react';
import type { FontAlign, FontBold, FontDecoration, FontSize, FontStyle, HexColor } from '../types';

const xxlFontStyle = css`
  font-size: 48px;
  line-height: 34px;
  letter-spacing: -0.01em;
  font-weight: 700;
`;

const xlFontStyle = css`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.02em;
  font-weight: 700;
`;

const largeFontStyle = css`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  font-weight: 700;
`;

const mediumFontStyle = css`
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.01em;
  font-weight: 700;
`;

const smallFontStyle = css`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.005em;
`;

const createFontSizeStyle = (size: FontSize) => {
  switch (size) {
    case 'xxl':
      return css(xxlFontStyle);
    case 'xl':
      return css(xlFontStyle);
    case 'lg':
      return css(largeFontStyle);
    case 'sm':
      return css(smallFontStyle);
    default:
      return css(mediumFontStyle);
  }
};

export const createBaseFontStyle = (
  size: FontSize,
  color: HexColor,
  bold: FontBold,
  decoration: FontDecoration,
  align: FontAlign,
  fontStyle: FontStyle
) => [
  {
    margin: 0,
    textDecoration: decoration,
    textAlign: align,
    fontWeight: bold,
    fontStyle,
    color
  },
  createFontSizeStyle(size)
];
