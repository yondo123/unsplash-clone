'use client';

import { useTheme } from '@emotion/react';
import { ButtonBase, createButtonStyle, createIconButtonStyle } from '../styles/buttonStyle';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  backgroundColor?: string;
  icon?: React.ReactElement;
}
export const Button = ({ children, as = 'button', backgroundColor, icon, ...restProps }: ButtonProps) => {
  const ButtonComponent = as;
  const defaultTheme = useTheme();

  if (icon) {
    return (
      <ButtonBase css={createIconButtonStyle(defaultTheme, backgroundColor)} type="button" {...restProps}>
        {children}
        <span>{icon}</span>
      </ButtonBase>
    );
  }

  return (
    <ButtonComponent css={createButtonStyle(defaultTheme, backgroundColor)} type="button" {...restProps}>
      {children}
    </ButtonComponent>
  );
};
