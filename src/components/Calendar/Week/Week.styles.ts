import styled from 'styled-components';

export const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 8px;
  padding: 0 16px;
`;
