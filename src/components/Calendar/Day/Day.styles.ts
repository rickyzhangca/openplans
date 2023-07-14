import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { fromTheme } from '../../../theme/fromTheme';

export const EmptyDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 20px;
  border-radius: 6px;
  user-select: none;
  flex: 1;
`;

export const DayContainer = styled(EmptyDayContainer)`
  &:hover {
    background-color: ${themeGet(fromTheme.colors.canvas.subtle)};
  }
  :active {
    background-color: ${themeGet(fromTheme.colors.canvas.inset)};
    box-shadow: inset 0 0 0 1px ${themeGet(fromTheme.colors.border.default)};
  }
`;

export const SelectedDayContainer = styled(EmptyDayContainer)`
  color: ${themeGet(fromTheme.colors.accent.fg)};
  background-color: ${themeGet(fromTheme.colors.canvas.subtle)};
  box-shadow: inset 0 0 0 1px ${themeGet(fromTheme.colors.accent.fg)};
`;
