import { Theme } from '@emotion/react';

export interface ThemeType {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    white: string;
    black: string;
    red: string;
    accent: string;
    disabled: string;
    border: string;
    font: string;
    positive: string;
    negative: string;
  };
}

const theme: Theme = {
  colors: {
    primary: '#5E87F7',
    secondary: '#8c8d96',
    tertiary: '#f1f1f1',
    white: '#ffffff',
    black: '#000000',
    red: '#EC5642',
    accent: '#E1E3E6',
    disabled: '#e9ebef',
    border: '#f2f4f6',
    font: '#767676',
    positive: '#3498db',
    negative: '#e74c3c'
  }
};

export interface ThemeColors {
  theme: Record<keyof typeof theme.colors, string>;
}

export default theme;
