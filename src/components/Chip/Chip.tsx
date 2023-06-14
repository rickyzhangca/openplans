import { useTheme } from '@primer/react';
import { RunTypes } from '../../hooks/usePlan';
import { BodyLarge } from '../../theme/typography';
import { Container, Shadow, Wrapper } from './Chip.styles';
import {
  EasyRunIcon,
  HillRunIcon,
  PaceRunIcon,
  RaceDayIcon,
  RestIcon,
} from './ChipIcons';

type ChipProps = {
  type: RunTypes;
  distance?: number;
  small?: boolean;
};

export const Chip = ({ type, distance, small }: ChipProps) => {
  const theme = useTheme();

  const getBackgroundColor = (): string => {
    switch (type) {
      case RunTypes.EASY_RUN:
        return theme.theme.colors.success.fg;
      case RunTypes.HILL_RUN:
        return theme.theme.colors.attention.fg;
      case RunTypes.PACE_RUN:
        return theme.theme.colors.accent.fg;
      case RunTypes.RACE_DAY:
        return theme.theme.colors.danger.emphasis;
      case RunTypes.REST:
        return theme.theme.colors.border.default;
      default:
        return '';
    }
  };

  const getIcon = (): JSX.Element => {
    switch (type) {
      case RunTypes.EASY_RUN:
        return <EasyRunIcon fill={theme.theme.colors.fg.onEmphasis} />;
      case RunTypes.HILL_RUN:
        return <HillRunIcon fill={theme.theme.colors.fg.onEmphasis} />;
      case RunTypes.PACE_RUN:
        return <PaceRunIcon fill={theme.theme.colors.fg.onEmphasis} />;
      case RunTypes.RACE_DAY:
        return <RaceDayIcon fill={theme.theme.colors.fg.onEmphasis} />;
      case RunTypes.REST:
        return <RestIcon fill={theme.theme.colors.fg.onEmphasis} />;
      default:
        return null;
    }
  };

  return (
    <Wrapper small={small}>
      <Container backgroundColor={getBackgroundColor()}>
        {getIcon()}
        {distance && <BodyLarge>{distance}</BodyLarge>}
      </Container>
      <Shadow backgroundColor={getBackgroundColor()} />
    </Wrapper>
  );
};
