'use client';

import { RootContainer } from '../_styles/containerStyle';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => <RootContainer>{children}</RootContainer>;
