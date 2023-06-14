import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { fromTheme } from '../../theme/fromTheme';

export const Wrapper = styled.div<{ small: boolean }>`
  position: relative;
  height: 28px;
  ${(props) => props.small && 'transform: scale(0.9)'};
`;

export const Container = styled.div<{
  backgroundColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 27px;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 13.5px;
  color: ${themeGet(fromTheme.colors.fg.onEmphasis)};
  background-color: ${(props) => props.backgroundColor};
`;

export const Shadow = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 27px;
  border-radius: 13.5px;
  border: 1px solid ${(props) => props.backgroundColor};
  position: absolute;
  top: 3px;
`;
