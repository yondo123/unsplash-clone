'use client';

import { useTheme } from '@emotion/react';
import { ButtonBase, createButtonStyle, createIconButtonStyle, createVariantStyle } from '../styles/buttonStyle';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'solid' | 'ghost';
  as?: React.ElementType;
  backgroundColor?: string;
  icon?: React.ReactElement;
}
export const Button = ({
  children,
  as = 'button',
  variant = 'solid',
  backgroundColor,
  icon,
  ...restProps
}: ButtonProps) => {
  const ButtonComponent = as;
  const defaultTheme = useTheme();

  if (icon) {
    return (
      <ButtonBase
        css={[createIconButtonStyle(defaultTheme, backgroundColor), createVariantStyle(defaultTheme, variant)]}
        type="button"
        {...restProps}
      >
        {children}
        <span>{icon}</span>
      </ButtonBase>
    );
  }

  return (
    <ButtonComponent
      css={[createButtonStyle(defaultTheme, backgroundColor), createVariantStyle(defaultTheme, variant)]}
      type="button"
      {...restProps}
    >
      {children}
    </ButtonComponent>
  );
};
