/* @jsxImportSource react */

import { Inter } from 'next/font/google';
import { GlobalStyle } from '@layouts/components/GlobalStyle';
import Link from 'next/link';
import { Heading, Button } from '@layouts/components';
import { Heart } from '@layouts/icons/';
import { RootHeader } from './_components/RootHeader';
import { Container } from './_components/Container';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Will Photo',
  description: '100개가 넘는 unsplash 사진을 무료로 다운로드하세요.'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <GlobalStyle>
      <body className={inter.className}>
        <Container>
          <RootHeader>
            <Link href="/">
              <Heading>WillLog</Heading>
            </Link>
            <Link href="/category/bookmark">
              <Button icon={<Heart />}>북마크</Button>
            </Link>
          </RootHeader>
        </Container>
        <main>{children}</main>
      </body>
    </GlobalStyle>
  </html>
);

export default RootLayout;
