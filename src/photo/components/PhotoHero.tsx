'use client';

import Image from 'next/image';
import { Text, Heading, InputText } from '@layouts/components';
import { useTheme } from '@emotion/react';
import { PhotoHeroContainer, SearchInputWrapper } from '../styles/photoheroStyle';
import type { Photo } from '@photo/types';

interface PhotoHeroProps {
  photo: Photo;
}

export const PhotoHero = ({ photo }: PhotoHeroProps) => {
  const defaultTheme = useTheme();
  const fontColor = defaultTheme.colors.white;
  return (
    <PhotoHeroContainer>
      <Image alt={photo?.alt_description} layout="fill" objectFit="cover" src={photo?.urls.full} />
      <SearchInputWrapper>
        <Heading size="xxl" color={fontColor}>
          Will Photo
        </Heading>
        <Text size="lg" color={defaultTheme.colors.accent} css={{ marginTop: '16px' }}>
          인터넷의 시각자료 출처입니다.
        </Text>
        <Text size="lg" color={defaultTheme.colors.accent}>
          모든 지역에 있는 크리에이터들의 자원을 받습니다.
        </Text>
        <InputText placeholder="고해상도 이미지 검색." css={{ marginTop: '16px' }} />
      </SearchInputWrapper>
    </PhotoHeroContainer>
  );
};
