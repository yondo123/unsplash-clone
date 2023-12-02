import styled from '@emotion/styled';
import { mediaQuery } from '../constants/responsive';

export const InputTextWrapper = styled.div`
  position: relative;
  width: 720px;
  > button {
    position: absolute;
    top: 75%;
    right: 10px;
    transform: translateY(-75%);
  }
  ${mediaQuery.lg} {
    width: 100%;
  }
`;

export const InputTextBase = styled.input`
  width: 100%;
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
