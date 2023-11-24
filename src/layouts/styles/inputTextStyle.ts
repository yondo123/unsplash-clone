import styled from '@emotion/styled';

export const InputTextWrapper = styled.div`
  margin: 0 auto;
  padding: 4px 10px;
`;

export const InputTextBase = styled.input`
  width: 100%;
  max-width: 720px;
  margin: 0;
  padding: 16px 12px;
  font-weight: 700;
  line-height: 0;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  ::placeholder {
    color: ${({ theme }) => theme.colors.font};
  }
`;
