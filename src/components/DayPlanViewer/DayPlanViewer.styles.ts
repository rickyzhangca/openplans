import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { fromTheme } from '../../theme/fromTheme';
import { BodySmall } from '../../theme/typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  :hover {
    color: ${themeGet(fromTheme.colors.fg.default)};
  }
`;

export const ConfigsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-top: 1px solid ${themeGet(fromTheme.colors.border.default)};
`;
