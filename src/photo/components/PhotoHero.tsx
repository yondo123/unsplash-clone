'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Text, Heading, InputText } from '@layouts/components';
import { useTheme } from '@emotion/react';
import { Search } from '@layouts/icons';
import { useState } from 'react';
import { PhotoHeroContainer, SearchInputWrapper } from '../styles/photoheroStyle';
import type { Photo } from '@photo/types';

interface PhotoHeroProps {
  photo: Photo;
}

export const PhotoHero = ({ photo }: PhotoHeroProps) => {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const defaultTheme = useTheme();
  const fontColor = defaultTheme.colors.white;

  return (
    <PhotoHeroContainer>
      <Image
        alt={photo?.alt_description}
        placeholder="blur"
        blurDataURL={photo.urls.blurData}
        layout="fill"
        objectFit="cover"
        src={photo?.urls.full}
      />
      <SearchInputWrapper>
        <form
          onSubmit={e => {
            e.preventDefault();
            router.push(`/?query=${searchKeyword}`);
          }}
        >
          <Heading size="xxl" color={fontColor}>
            Will Photo
          </Heading>
          <Text size="lg" color={defaultTheme.colors.accent} css={{ marginTop: '16px' }}>
            인터넷의 시각자료 출처입니다.
          </Text>
          <Text size="lg" color={defaultTheme.colors.accent}>
            모든 지역에 있는 크리에이터들의 자원을 받습니다.
          </Text>
          <InputText
            onChange={e => {
              setSearchKeyword(e.currentTarget.value);
            }}
            submitIcon={<Search />}
            placeholder="고해상도 이미지 검색."
            css={{ marginTop: '16px' }}
          />
        </form>
      </SearchInputWrapper>
    </PhotoHeroContainer>
  );
};
