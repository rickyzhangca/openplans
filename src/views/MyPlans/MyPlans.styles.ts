import { themeGet } from '@primer/react';
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
