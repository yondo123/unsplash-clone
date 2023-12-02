/* @jsxImportSource react */
import Link from 'next/link';
import { Suspense } from 'react';
import { Navigation } from '@layouts/components';
import { PhotoHero } from '@photo/components/PhotoHero';
import { Photos } from '@photo/components/Photos';
import { PhotoPagination } from '@photo/components/PhotoPagination';
import { PAGE_SIZE } from '@shared/constants';
import getPhotos from '@services/getPhotos';
import getRandomPhoto from '@services/getRandomPhoto';
import Loading from './loading';
import type { PageParams, PageSearchParams } from './types';

interface ServerPageProps {
  params?: PageParams;
  searchParams?: PageSearchParams;
}

const Home = async ({ searchParams }: ServerPageProps) => {
  const reqPage = searchParams?.page || 1;
  const { results, total } = await getPhotos({ page: String(reqPage) });
  const heroPhoto = await getRandomPhoto();

  return (
    <main>
      <Navigation>
        <Link href="/">보도/편집전용</Link>
        <Link href="/following">팔로잉</Link>
        <Link href="/landscape">Will Photo+</Link>
        <Link href="/color">단색</Link>
      </Navigation>
      <PhotoHero photo={heroPhoto} />
      <Suspense fallback={<Loading />}>
        <Photos photos={results} />
        <PhotoPagination totalPages={total} pageSize={PAGE_SIZE} />
      </Suspense>
    </main>
  );
};

export default Home;
