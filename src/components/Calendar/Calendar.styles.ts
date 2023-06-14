import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { devices } from '../../theme/device';
import { fromTheme } from '../../theme/fromTheme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-bottom: 100px;
`;

export const MonthControlButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 6px 16px 6px 12px;
  border: 1px solid ${themeGet(fromTheme.colors.border.default)};
  border-radius: 20px;
  background-color: ${themeGet(fromTheme.colors.canvas.default)};
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${themeGet(fromTheme.colors.canvas.inset)};
  }
`;

export const MonthControlButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  height: 36px;
`;

export const MonthControlButtonAbsoluteContainer = styled(
  MonthControlButtonContainer,
)`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  padding: 0px;
  z-index: 1;
  ${MonthControlButton} {
    transform: translateY(-50%);
  }
  @media ${devices.mobile} {
    z-index: 0;
    position: relative;
    ${MonthControlButton} {
      transform: none;
      display: flex;
    }
  }
`;
