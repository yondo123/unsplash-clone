import { getPlaiceholder } from 'plaiceholder';
import type { GetPlaiceholderOptions } from 'plaiceholder';

export const convertImageUrlToBase64 = async (url: string, options?: GetPlaiceholderOptions) => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const { base64 } = await getPlaiceholder(buffer, { ...options });
  return base64;
};
