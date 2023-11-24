import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const createTagStyle = (theme: Theme, backgroundColor?: `#${string}`) =>
  css({
    backgroundColor: `${backgroundColor ?? theme.colors.tertiary}`,
    color: `${theme.colors.font}`,
    fontWeight: 700,
    padding: '4px 8px',
    borderRadius: '4px'
  });
