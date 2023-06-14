import styled from 'styled-components';
import { devices } from '../../../theme/device';

export const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 8px;
  padding: 0 16px;
  @media ${devices.mobile} {
    gap: 0px;
    padding: 0 8px;
  }
`;
