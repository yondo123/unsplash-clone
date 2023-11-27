'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { extractPropValueFromComponent } from '@shared/utils/react';
import { useTheme } from '@emotion/react';
import { Text } from './Text';
import { HorizontalNavigation, NavigationList, LinkItem } from '../styles/navigationStyle';

interface NavigationProps {
  children: React.ReactNode;
}

interface NavigationItemProps {
  children: React.ReactNode;
}

const NavigationItem = ({ children }: NavigationItemProps) => {
  const { colors } = useTheme();
  const currentPath = usePathname();
  const pathName = extractPropValueFromComponent(children, 'href');
  const isCurrentPath = currentPath === pathName;
  const activeFontColor = isCurrentPath ? colors.black : colors.font;

  return (
    <LinkItem active={isCurrentPath}>
      <Text size="lg" color={activeFontColor}>
        {children}
      </Text>
    </LinkItem>
  );
};

export const Navigation = ({ children }: NavigationProps) => (
  <HorizontalNavigation>
    <NavigationList>
      {React.Children.map(children, child => (
        <NavigationItem>{child}</NavigationItem>
      ))}
    </NavigationList>
  </HorizontalNavigation>
);

Navigation.Item = NavigationItem;
