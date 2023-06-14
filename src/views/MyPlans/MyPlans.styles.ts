import styled from 'styled-components';
import { devices } from '../../theme/device';

export const Container = styled.div`
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  gap: 16px;
  align-items: flex-start;
  position: relative;
  @media ${devices.mobile} {
    padding-left: 16px;
    padding-right: 16px;
  }
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
  @media ${devices.mobile} {
    position: fixed;
    top: auto;
    bottom: 16px;
    width: calc(100% - 16px - 16px);
  }
`;

export const RunTypeOption = styled.div`
  display: flex;
  align-items: center;
`;
