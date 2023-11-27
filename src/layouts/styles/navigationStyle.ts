import styled from '@emotion/styled';

type LinkItemProps = {
  active: boolean;
};

export const HorizontalNavigation = styled.nav`
  width: 100%;
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const LinkItem = styled.li`
  cursor: pointer;
  padding: 4 px 0;
  height: 32px;
  color: ${(props: LinkItemProps) => (props.active ? '4px solid black' : 'none')};
  border-bottom: ${(props: LinkItemProps) => (props.active ? '4px solid black' : 'none')};
  a :hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
