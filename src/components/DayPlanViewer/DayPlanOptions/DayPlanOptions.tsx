import { CheckCircleFillIcon, CircleIcon } from '@primer/octicons-react';
import { useTheme } from '@primer/react';
import { v4 as uuidv4 } from 'uuid';
import { RunTypes } from '../../../hooks/usePlan';
import { BodyButton } from '../../../theme/typography';
import { Chip } from '../../Chip/Chip';
import {
  Container,
  ItemContainer,
  ItemContainerContent,
} from './DayPlanOptions.styles';

type DayPlanOptionsProps = {
  selected: RunTypes;
  onSelect: (RunTypes) => void;
};

export const DayPlanOptions = ({ selected, onSelect }: DayPlanOptionsProps) => {
  const theme = useTheme();

  const items = [
    {
      type: RunTypes.EASY_RUN,
      label: 'Easy run',
    },
    {
      type: RunTypes.HILL_RUN,
      label: 'Hill run',
    },
    {
      type: RunTypes.PACE_RUN,
      label: 'Pace run',
    },
    {
      type: RunTypes.RACE_DAY,
      label: 'Race day',
    },
    {
      type: RunTypes.REST,
      label: 'Rest',
    },
  ];

  const renderItem = (selected: boolean, type: RunTypes, label: string) => {
    return (
      <ItemContainer
        key={uuidv4()}
        selected={selected}
        // https://github.com/facebook/react/issues/4210
        onClick={() => {
          if (!selected) {
            onSelect(type);
          }
        }}
      >
        {selected ? (
          <CheckCircleFillIcon fill={theme.theme.colors.accent.fg} />
        ) : (
          <CircleIcon fill={theme.theme.colors.border.default} />
        )}
        <ItemContainerContent>
          <Chip small type={type} />
          <BodyButton>{label}</BodyButton>
        </ItemContainerContent>
      </ItemContainer>
    );
  };

  return (
    <Container>
      {items.map((item) =>
        renderItem(item.type === selected, item.type, item.label),
      )}
    </Container>
  );
};
