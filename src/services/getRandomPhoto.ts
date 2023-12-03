import { convertImageUrlToBase64 } from '@libraries/plaiceholder';
import { generateUrlParams } from '@shared/utils/url';
import { CLIENT_ID, BASE_URL } from '@shared/constants';
import type { Photo } from '@photo/types';

const getRandomPhoto = async (): Promise<Photo> => {
  const queryParams = generateUrlParams({
    client_id: CLIENT_ID
  });
  const res = await fetch(`${BASE_URL}/photos/random?${queryParams}`);

  const errorCode = res.ok ? false : res.status;
  if (errorCode) {
    throw new Error(`Status Code: ${errorCode}`);
  }
  const photo: Photo = await res.json();
  const binaryImage = await convertImageUrlToBase64(photo.urls.full);
  return {
    ...photo,
    urls: {
      ...photo.urls,
      blurData: binaryImage
    }
  };
};

export default getRandomPhoto;
