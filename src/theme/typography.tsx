import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { fromTheme } from './fromTheme';

export const Display = styled.h1`
  font-size: ${themeGet(fromTheme.fontSizes[6])};
  font-weight: ${themeGet(fromTheme.fontWeights.semibold)};
  margin: 0;
`;
export const TitleLarge = styled.h2`
  font-size: ${themeGet(fromTheme.fontSizes[5])};
  font-weight: ${themeGet(fromTheme.fontWeights.bold)};
  margin: 0;
`;
export const TitleMedium = styled.h3`
  font-size: ${themeGet(fromTheme.fontSizes[3])};
  font-weight: ${themeGet(fromTheme.fontWeights.bold)};
  margin: 0;
`;
export const TitleSmall = styled.h4`
  font-size: ${themeGet(fromTheme.fontSizes[2])};
  font-weight: ${themeGet(fromTheme.fontWeights.bold)};
  margin: 0;
`;
export const Subtitle = styled.h5`
  font-size: ${themeGet(fromTheme.fontSizes[3])};
  font-weight: ${themeGet(fromTheme.fontWeights.normal)};
  margin: 0;
`;

export const BodyLarge = styled.span`
  font-size: ${themeGet(fromTheme.fontSizes[2])};
  font-weight: ${themeGet(fromTheme.fontWeights.normal)};
  margin: 0;
`;
export const BodyMedium = styled.span`
  font-size: ${themeGet(fromTheme.fontSizes[1])};
  font-weight: ${themeGet(fromTheme.fontWeights.normal)};
  margin: 0;
`;
export const BodySmall = styled.span`
  font-size: ${themeGet(fromTheme.fontSizes[0])};
  font-weight: ${themeGet(fromTheme.fontWeights.normal)};
  margin: 0;
`;
export const Caption = styled.span`
  font-size: ${themeGet(fromTheme.fontSizes[0])};
  font-weight: ${themeGet(fromTheme.fontWeights.normal)};
  margin: 0;
`;

export const BodyButton = styled.span`
  font-size: ${themeGet(fromTheme.fontSizes[1])};
  font-weight: ${themeGet(fromTheme.fontWeights.semibold)};
  margin: 0;
`;
