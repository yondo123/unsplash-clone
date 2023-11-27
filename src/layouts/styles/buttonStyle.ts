import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const createButtonStyle = (theme: Theme, backgroundColor?: string) =>
  css({
    width: 'fit-content',
    height: '32px',
    padding: '0 12px',
    border: '1px solid ',
    borderRadius: '4px',
    backgroundColor: `${backgroundColor ?? theme.colors.white}`,
    color: `${theme.colors.font}`,
    fontWeight: 700,
    cursor: 'pointer',
    ':disabled': {
      backgroundColor: `${theme.colors.disabled}`,
      color: `${theme.colors.font}`,
      cursor: 'not-allowed'
    },
    ':hover:not([disabled])': {
      color: `${theme.colors.black}`,
      borderColor: `${theme.colors.black}`
    }
  });

export const createVariantStyle = (theme: Theme, variant: 'solid' | 'ghost') => {
  if (variant === 'ghost') {
    return css({
      backgroundColor: 'transparent',
      border: 'none',
      ':hover:not([disabled])': {
        color: `${theme.colors.black}`,
        borderColor: `${theme.colors.black}`
      }
    });
  }
  return css({});
};

export const createIconButtonStyle = (theme: Theme, backgroundColor?: string) => {
  const buttonStyle = createButtonStyle(theme, backgroundColor);
  return css(buttonStyle, {
    '> span': {
      float: 'right',
      marginLeft: '8px',
      lineHeight: '1px'
    },
    textAlign: 'center'
  });
};

export const ButtonBase = styled.button`
  width: fit-content;
  height: 32px;
  padding: 0 12px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.font};
  cursor: pointer;
  :disabled {
    background-color: red;
    color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
  :hover {
    color: ${({ theme }) => theme.colors.black};
    border-color: ${({ theme }) => theme.colors.black};
  }
`;
