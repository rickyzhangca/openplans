import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { fromTheme } from './fromTheme';

export const Display = styled.h1<{ color?: string }>`
  font-size: ${themeGet(fromTheme.fontSizes[6])};
  font-weight: ${themeGet(fromTheme.fontWeights.semibold)};
  margin: 0;
  color: ${(props) => props.color};
`;
export const TitleLarge = styled.h2<{ color?: string }>`
  font-size: ${themeGet(fromTheme.fontSizes[5])};
  font-weight: ${themeGet(fromTheme.fontWeights.bold)};
  margin: 0;
  color: ${(props) => props.color};
`;
export const TitleMedium = styled.h3<{ color?: string }>`
  font-size: ${themeGet(fromTheme.fontSizes[3])};
  font-weight: ${themeGet(fromTheme.fontWeights.bold)};
  margin: 0;
  color: ${(props) => props.color};
`;
export const TitleSmall = styled.h4<{ color?: string }>`
  font-size: ${themeGet(fromTheme.fontSizes[2])};
  font-weight: ${themeGet(fromTheme.fontWeights.bold)};
  margin: 0;
  color: ${(props) => props.color};
`;
export const Subtitle = styled.h5<{ color?: string }>`
  font-size: ${themeGet(fromTheme.fontSizes[3])};
  font-weight: ${themeGet(fromTheme.fontWeights.normal)};
  margin: 0;
  color: ${(props) => props.color};
`;

export const BodyLarge = styled.span<{ color?: string }>`
  font-size: ${themeGet(fromTheme.fontSizes[2])};
  font-weight: ${themeGet(fromTheme.fontWeights.normal)};
  margin: 0;
  color: ${(props) => props.color};
`;
export const BodyMedium = styled.span<{ color?: string }>`
  font-size: ${themeGet(fromTheme.fontSizes[1])};
  font-weight: ${themeGet(fromTheme.fontWeights.normal)};
  margin: 0;
  color: ${(props) => props.color};
`;
export const BodySmall = styled.span<{ color?: string }>`
  font-size: ${themeGet(fromTheme.fontSizes[0])};
  font-weight: ${themeGet(fromTheme.fontWeights.normal)};
  margin: 0;
  color: ${(props) => props.color};
`;
export const Caption = styled.span<{ color?: string }>`
  font-size: ${themeGet(fromTheme.fontSizes[0])};
  font-weight: ${themeGet(fromTheme.fontWeights.normal)};
  margin: 0;
  color: ${(props) => props.color};
`;

export const BodyButton = styled.span<{ color?: string }>`
  font-size: ${themeGet(fromTheme.fontSizes[1])};
  font-weight: ${themeGet(fromTheme.fontWeights.semibold)};
  margin: 0;
  color: ${(props) => props.color};
`;
