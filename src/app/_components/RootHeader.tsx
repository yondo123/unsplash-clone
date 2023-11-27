'use client';

import { HeaderContainer } from '../_styles/headerStyle';

interface RootHeaderProps {
  children: React.ReactNode;
}

export const RootHeader = ({ children }: RootHeaderProps) => <HeaderContainer>{children}</HeaderContainer>;
