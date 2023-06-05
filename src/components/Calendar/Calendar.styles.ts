import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { fromTheme } from '../../theme/fromTheme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-bottom: 100px;
`;

export const AddMonthButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px 15px 6px 12px;
  border: 1px solid ${themeGet(fromTheme.colors.border.default)};
  border-radius: 20px;
  background-color: ${themeGet(fromTheme.colors.canvas.default)};
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: ${themeGet(fromTheme.colors.canvas.subtle)};
  }
`;

export const AddPreviousMonthButtonWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  ${AddMonthButtonContainer} {
    transform: translateY(-50%);
    opacity: 0;
  }
  :hover {
    ${AddMonthButtonContainer} {
      opacity: 1;
    }
  }
`;
