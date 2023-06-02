import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { fromTheme } from '../../../theme/fromTheme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 0px;
`;

export const ItemContainer = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  user-select: none;
  cursor: pointer;
  :hover {
    background-color: ${themeGet(fromTheme.colors.canvas.subtle)};
  }
`;

export const ItemContainerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
