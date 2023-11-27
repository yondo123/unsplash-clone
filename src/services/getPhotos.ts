import { generateUrlParams } from '@shared/utils/url';
import { PER_PAGE, CLIENT_ID, BASE_URL } from '@shared/constants';
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

  return {
    total: Number(res.headers.get('x-total')),
    results: await res.json()
  };
};

export default getPhotos;
