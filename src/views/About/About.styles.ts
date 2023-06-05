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

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 128px 12px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid ${themeGet(fromTheme.colors.border.default)};
`;

export const HeaderSectionImage = styled.img``;
