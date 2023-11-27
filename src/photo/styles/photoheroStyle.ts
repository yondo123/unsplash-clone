import styled from '@emotion/styled';

export const PhotoHeroContainer = styled.div`
  object-fit: contain;
  width: 100%;
  height: 400px;
  position: relative;
`;

export const SearchInputWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
