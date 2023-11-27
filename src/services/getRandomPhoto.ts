import { generateUrlParams } from '@shared/utils/url';
import { CLIENT_ID, BASE_URL } from '@shared/constants';
import type { Photo } from '@photo/types';

const getRandomPhoto = async (): Promise<Photo> => {
  const queryParams = generateUrlParams({
    client_id: CLIENT_ID
  });
  const res = await fetch(`${BASE_URL}/photos/random?${queryParams}`);
  return res.json();
};

export default getRandomPhoto;
