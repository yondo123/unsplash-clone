import styled from '@emotion/styled';

export const PhotoContainer = styled.section`
  padding: 16px;
  margin: 0 auto;
  max-width: 1280px;
`;

export const PhotoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); // 컬럼 크기를 250px에서 1fr까지 유연하게 조정
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const PhotoCard = styled.li`
  position: relative; // Image 컴포넌트를 위한 포지셔닝 컨텍스트
  cursor: pointer;
  padding: 4px; // 패딩을 통해 이미지 주위에 공간을 만듦
  width: 100%; // 그리드 아이템의 너비를 부모에 맞춤
  &:before {
    content: '';
    display: block;
    padding-top: 100%; // 종횡비 1:1을 유지하기 위해 상위에 비율 블록을 만듦
  }

  button {
    z-index: 120;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`;
