'use client';

import Image from 'next/image';
import { PhotoContainer, PhotoList, PhotoCard } from '@photo/styles/photoStyle';
import { Button } from '@layouts/components';
import { Heart } from '@layouts/icons';
import type { Photo } from '@photo/types';

interface PhotoProps {
  photos: Photo[];
}

export const Photos = ({ photos: prefetchedPhotos }: PhotoProps) => (
  <PhotoContainer>
    <PhotoList>
      {prefetchedPhotos.map(photo => (
        <PhotoCard key={photo.id}>
          <Image
            placeholder="blur"
            blurDataURL={photo.urls.blurData}
            src={photo.urls.regular}
            alt={photo.alt_description}
            style={{ objectFit: 'cover' }}
            fill
          />
          <Button variant="ghost">
            <Heart width={24} height={24} />
          </Button>
        </PhotoCard>
      ))}
    </PhotoList>
  </PhotoContainer>
);
