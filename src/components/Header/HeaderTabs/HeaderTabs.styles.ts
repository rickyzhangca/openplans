import { themeGet } from '@primer/react';
import styled from 'styled-components';

import { fromTheme } from '../../../theme/fromTheme';

export const TabsNav = styled.div`
  position: relative;
`;

export const Tab = styled.div<{ selected?: boolean }>`
  padding: 8px 16px;
  font-size: ${themeGet(fromTheme.fontSizes[1])};
  font-weight: ${themeGet(fromTheme.fontWeights.semibold)};
  color: ${(props) =>
    props.selected
      ? themeGet(fromTheme.colors.fg.default)
      : themeGet(fromTheme.colors.fg.subtle)};
  background-color: ${(props) =>
    props.selected && themeGet(fromTheme.colors.neutral.muted)};
  border-radius: 6px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: color 250ms;
  user-select: none;
  &:hover {
    color: ${themeGet(fromTheme.colors.fg.default)};
  }
  &:active {
    background-color: ${themeGet(fromTheme.colors.neutral.muted)};
  }
`;

export const TabsHighlight = styled.div`
  background-color: ${themeGet(fromTheme.colors.neutral.muted)};
  position: absolute;
  left: 0;
  border-radius: 6px;
  height: 37px;
  transition: 0.2s ${themeGet(fromTheme.animation.easeOutCubic)};
  transition-property: width, transform, opacity;
`;
