'use client';

import { InvisibleContainer } from '../styles/hiddenStyle';

export const Hidden = ({ children }: { children: React.ReactNode }) => (
  <InvisibleContainer>{children}</InvisibleContainer>
);
