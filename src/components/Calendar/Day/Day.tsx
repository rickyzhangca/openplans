import dayjs from 'dayjs';
import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DayPlan, RunTypes } from '../../../hooks/usePlan';
import { BodyLarge } from '../../../theme/typography';
import { Chip } from '../../Chip/Chip';
import {
  DayContainer,
  EmptyDayContainer,
  SelectedDayContainer,
} from './Day.styles';

type DayProps = {
  selected: Date;
  onSelect: (day: Date) => void;
  day: Date;
  dayPlan: DayPlan[];
  firstDayOfMonth: Date;
  lastDayOfMonth: Date;
};

export const Day = memo(
  ({
    selected,
    onSelect,
    day,
    dayPlan,
    firstDayOfMonth,
    lastDayOfMonth,
  }: DayProps) => {
    return (
      <>
        {dayjs(day).isBetween(firstDayOfMonth, lastDayOfMonth, 'day', '[]') ? (
          selected === day ? (
            <SelectedDayContainer
              key={uuidv4()}
              onClick={() => {
                onSelect(day);
              }}
            >
              <BodyLarge>{dayjs(day).format('D')}</BodyLarge>
              {dayPlan ? (
                <Chip
                  type={dayPlan[0].runType}
                  distance={dayPlan[0].distance}
                />
              ) : (
                <Chip type={RunTypes.REST} />
              )}
            </SelectedDayContainer>
          ) : (
            <DayContainer
              key={uuidv4()}
              onClick={() => {
                onSelect(day);
              }}
            >
              <BodyLarge>{dayjs(day).format('D')}</BodyLarge>
              {dayPlan ? (
                <Chip
                  type={dayPlan[0].runType}
                  distance={dayPlan[0].distance}
                />
              ) : (
                <Chip type={RunTypes.REST} />
              )}
            </DayContainer>
          )
        ) : (
          <EmptyDayContainer key={uuidv4()} />
        )}
      </>
    );
  },
);
