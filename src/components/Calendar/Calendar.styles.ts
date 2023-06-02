import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { fromTheme } from '../../theme/fromTheme';
import { BodyMedium } from '../../theme/typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MonthContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid ${themeGet(fromTheme.colors.border.default)};
  gap: 8px;
  padding-bottom: 8px;
`;

export const MonthHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 12px 20px;
`;

export const DayNamesContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 16px;
  border-bottom: 1px solid ${themeGet(fromTheme.colors.border.default)};
`;

export const DayName = styled(BodyMedium)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 12px;
  color: ${themeGet(fromTheme.colors.fg.muted)};
`;
