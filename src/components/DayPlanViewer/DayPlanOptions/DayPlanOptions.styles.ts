import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { devices } from '../../../theme/device';
import { fromTheme } from '../../../theme/fromTheme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 4px 8px 4px;
  @media ${devices.mobile} {
    flex-direction: row;
    overflow-x: scroll;
  }
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
  @media ${devices.mobile} {
    flex-direction: column-reverse;
    padding: 16px 12px;
  }
`;

export const ItemContainerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media ${devices.mobile} {
    width: max-content;
    flex-direction: column;
  }
`;
