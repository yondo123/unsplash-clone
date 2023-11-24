/* @jsxImportSource react */

import { Inter } from 'next/font/google';
import { GlobalStyle } from '@layouts/components/GlobalStyle';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Will Photo',
  description: '100개가 넘는 unsplash 사진을 무료로 다운로드하세요.'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <GlobalStyle>
      <body className={inter.className}>{children}</body>
    </GlobalStyle>
  </html>
);

export default RootLayout;
