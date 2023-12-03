import { convertImageUrlToBase64 } from '@libraries/plaiceholder';
import { generateUrlParams } from '@shared/utils/url';
import { PER_PAGE, CLIENT_ID, BASE_URL } from '@shared/constants';
import { getErrorMessage } from '@app/_utils/errrorMessages';
import type { Photo } from '@photo/types';

const URL = `${BASE_URL}/photos`;

export interface ResponseData {
  total: number;
  results: Photo[];
}

interface RequestParams {
  page?: string;
}

const getPhotos = async ({ page }: RequestParams): Promise<ResponseData> => {
  const queryParams = generateUrlParams({
    client_id: CLIENT_ID,
    per_page: PER_PAGE.toString(),
    page: page ?? '1'
  });

  const res = await fetch(`${URL}?${queryParams}`);
  const errorMessage = getErrorMessage(res.status);

  if (errorMessage) {
    throw new Error(errorMessage);
  }

  const photos: Photo[] = await res.json();
  const photosWithBlurData = await Promise.all(
    photos.map(async photo => {
      const binaryImage = await convertImageUrlToBase64(photo.urls.regular);
      return {
        ...photo,
        urls: {
          ...photo.urls,
          blurData: binaryImage
        }
      };
    })
  );

  return {
    total: Number(res.headers.get('x-total')),
    results: photosWithBlurData
  };
};

export default getPhotos;
