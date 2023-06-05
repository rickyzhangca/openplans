import { FormControl, themeGet } from '@primer/react';
import styled from 'styled-components';
import { fromTheme } from '../../theme/fromTheme';

export const Container = styled.div`
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  gap: 16px;
  align-items: flex-start;
  position: relative;
`;

export const LeftContainer = styled.div`
  display: flex;
  overflow: visible;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

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

export const RightContainer = styled.div`
  position: sticky;
  // header height - amount of decreased + gap
  top: calc(80px - (20px - 6px) * 2 + 16px);
  width: 240px;
  border-radius: 12px;
  border: 1px solid ${themeGet(fromTheme.colors.border.default)};
  overflow: hidden;
`;

export const RunTypeOption = styled.div`
  display: flex;
  align-items: center;
`;

export const Test = styled(FormControl)`
  display: flex;
  align-items: center;
`;
