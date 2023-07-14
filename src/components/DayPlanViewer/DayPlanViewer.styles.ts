import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { devices } from '../../theme/device';
import { fromTheme } from '../../theme/fromTheme';
import { BodySmall } from '../../theme/typography';

export const Container = styled.div<{ hasSelectedDay: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${themeGet(fromTheme.colors.canvas.default)};
  border: 1px solid ${themeGet(fromTheme.colors.border.default)};
  overflow: hidden;
  border-radius: 12px;
  @media ${devices.mobile} {
    ${(props) => (props.hasSelectedDay ? 'display: block;' : 'display: none;')}
    box-shadow: ${themeGet(fromTheme.shadows.shadow.extraLarge)};
  }
`;

export const HeaderPlaceholderText = styled(BodySmall)`
  color: ${themeGet(fromTheme.colors.fg.muted)};
  text-align: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 24px 16px 24px;
  background-color: ${themeGet(fromTheme.colors.canvas.inset)};
  border-bottom: 1px solid ${themeGet(fromTheme.colors.border.default)};
`;

export const HeaderXIconWrapper = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  display: flex;
  padding: 8px;
  color: ${themeGet(fromTheme.colors.fg.subtle)};
  cursor: pointer;
  &:hover {
    color: ${themeGet(fromTheme.colors.fg.default)};
  }
  @media ${devices.mobile} {
    top: 8px;
    right: 8px;
  }
`;

export const ConfigsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-top: 1px solid ${themeGet(fromTheme.colors.border.default)};
`;
