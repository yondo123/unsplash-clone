'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@emotion/react';
import { Text } from './Text';
import { HorizontalNavigation, NavigationList, LinkItem } from '../styles/navigationStyle';
import type { LinkProps } from 'next/link';

interface NavigationProps {
  children: React.ReactNode;
}

interface NavigationItemProps extends LinkProps {
  children: React.ReactNode;
}

export const NavigationItem = ({ children, ...linkProps }: NavigationItemProps) => {
  const { href } = linkProps;
  const { colors } = useTheme();
  const currentPath = usePathname();
  const isCurrentPath = currentPath === href;
  const activeFontColor = isCurrentPath ? colors.black : colors.font;

  return (
    <LinkItem active={isCurrentPath}>
      <Link {...linkProps}>
        <Text color={activeFontColor}>{children}</Text>
      </Link>
    </LinkItem>
  );
};

export const Navigation = ({ children }: NavigationProps) => (
  <HorizontalNavigation>
    <NavigationList>{children}</NavigationList>
  </HorizontalNavigation>
);
