import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { devices } from '../../theme/device';
import { fromTheme } from '../../theme/fromTheme';
import { BodyLarge } from '../../theme/typography';

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

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 128px 24px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid ${themeGet(fromTheme.colors.border.default)};
`;

export const HeaderSectionImage = styled.img`
  width: 100%;
  max-width: 480px;
`;

export const HeaderSectionText = styled(BodyLarge)`
  text-align: center;
`;
