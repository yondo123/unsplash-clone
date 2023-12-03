/* @jsxImportSource react */
import Link from 'next/link';
import { Navigation } from '@layouts/components';
import { PhotoHero } from '@photo/components/PhotoHero';
import { Photos } from '@photo/components/Photos';
import { PhotoPagination } from '@photo/components/PhotoPagination';
import { PAGE_SIZE } from '@shared/constants';
import getPhotos from '@services/getPhotos';
import getRandomPhoto from '@services/getRandomPhoto';
import type { PageParams, PageSearchParams } from './types';

interface ServerPageProps {
  params?: PageParams;
  searchParams?: PageSearchParams;
}

const Home = async ({ searchParams }: ServerPageProps) => {
  const reqPage = searchParams?.page;
  const { results, total } = await getPhotos({ page: reqPage });
  const heroPhoto = await getRandomPhoto();

  return (
    <>
      <Navigation>
        <Link href="/">보도/편집전용</Link>
        <Link href="/following">팔로잉</Link>
        <Link href="/landscape">Will Photo+</Link>
        <Link href="/color">단색</Link>
      </Navigation>
      <PhotoHero photo={heroPhoto} />
      <Photos photos={results} />
      <PhotoPagination totalPages={total} pageSize={PAGE_SIZE} />
    </>
  );
};

export default Home;
