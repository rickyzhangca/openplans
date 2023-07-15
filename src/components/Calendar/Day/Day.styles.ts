import { themeGet } from '@primer/react';
import * as Popover from '@radix-ui/react-popover';
import styled from 'styled-components';
import { fromTheme } from '../../../theme/fromTheme';

export const EmptyDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 20px;
  user-select: none;
  flex: 1;
`;

export const DayContainer = styled(EmptyDayContainer)`
  box-shadow:
    inset 0 0 0 0.5px ${themeGet(fromTheme.colors.border.default)},
    0 0 0 0.5px ${themeGet(fromTheme.colors.border.default)};
  &:hover {
    background-color: ${themeGet(fromTheme.colors.canvas.subtle)};
  }
  &:active {
    background-color: ${themeGet(fromTheme.colors.canvas.inset)};
  }
`;

export const SelectedDayContainer = styled(EmptyDayContainer)`
  z-index: 1;
  color: ${themeGet(fromTheme.colors.accent.fg)};
  background-color: ${themeGet(fromTheme.colors.canvas.subtle)};
  box-shadow:
    inset 0 0 0 0.5px ${themeGet(fromTheme.colors.accent.fg)},
    0 0 0 0.5px ${themeGet(fromTheme.colors.accent.fg)};
`;

export const StyledPopoverRoot = styled(Popover.Root)`
  font-family: 'Inter', ${themeGet(fromTheme.fonts.normal)};
  background-color: red;
`;
