/* @jsxImportSource react */
import { Navigation, NavigationItem } from '@layouts/components';
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
        <NavigationItem href="/">보도/편집전용</NavigationItem>
        <NavigationItem href="/following">팔로잉</NavigationItem>
        <NavigationItem href="/landscape">Will Photo+</NavigationItem>
        <NavigationItem href="/color">단색</NavigationItem>
      </Navigation>
      <PhotoHero photo={heroPhoto} />
      <Photos photos={results} />
      <PhotoPagination totalPages={total} pageSize={PAGE_SIZE} />
    </>
  );
};

export default Home;
