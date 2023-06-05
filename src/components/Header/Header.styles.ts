import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { fromTheme } from '../../theme/fromTheme';

export const Wrapper = styled.div<{ minimal: boolean }>`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 80px;
  ${(props) => props.minimal && 'z-index: 1;'}
`;

export const Container = styled.div<{ minimal: boolean }>`
  padding-left: 24px;
  padding-right: 16px;
  padding-top: ${(props) => (props.minimal ? '6px' : '20px')};
  padding-bottom: ${(props) => (props.minimal ? '6px' : '20px')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background-color: ${themeGet(fromTheme.colors.canvas.default)};
  box-shadow: ${(props) =>
    props.minimal
      ? '0px 0px 12px 0px rgba(0, 0, 0, 0.06),0px 1px 1px 0px rgba(0, 0, 0, 0.06)'
      : 'none'};
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderIconContainer = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 6px;
  fill: ${themeGet(fromTheme.colors.fg.subtle)};
  :hover {
    fill: ${themeGet(fromTheme.colors.fg.default)};
    background-color: ${themeGet(fromTheme.colors.canvas.inset)};
  }
  :active {
    background-color: ${themeGet(fromTheme.colors.neutral.muted)};
  }
`;
