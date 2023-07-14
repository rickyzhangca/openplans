import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { fromTheme } from '../../../theme/fromTheme';

export const ExportBarContainer = styled.div`
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: min-content;
  bottom: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 4px 12px 16px;
  border-radius: 12px;
  background-color: ${themeGet(fromTheme.colors.canvas.default)};
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.12),
    0px 0px 2px 0px rgba(0, 0, 0, 0.16);
`;

export const ExportBarContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
