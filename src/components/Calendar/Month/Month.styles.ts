import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { fromTheme } from '../../../theme/fromTheme';
import { BodySmall } from '../../../theme/typography';

export const MonthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 12px;
  box-shadow:
    0 0 0 0.5px inset ${themeGet(fromTheme.colors.border.default)},
    0 0 0 0.5px ${themeGet(fromTheme.colors.border.default)};
`;

export const MonthHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 8px 20px;
`;

export const DayNamesContainer = styled.div`
  display: flex;
`;

export const DayNamesDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${themeGet(fromTheme.colors.border.default)};
  transform: translateY(0.5px);
`;

export const MonthlyStatsDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${themeGet(fromTheme.colors.border.default)};
  transform: translateY(-0.5px);
`;

export const DayName = styled(BodySmall)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  color: ${themeGet(fromTheme.colors.fg.muted)};
`;
