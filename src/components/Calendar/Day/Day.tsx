import dayjs from 'dayjs';
import { Returns } from 'use-lilius';
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
  lilius: Returns;
  day: Date;
  dayPlan: DayPlan[];
  firstDayOfMonth: Date;
  lastDayOfMonth: Date;
};

export const Day = ({
  lilius,
  day,
  dayPlan,
  firstDayOfMonth,
  lastDayOfMonth,
}: DayProps) => {
  return (
    <>
      {dayjs(day).isBetween(firstDayOfMonth, lastDayOfMonth, 'day', '[]') ? (
        lilius.isSelected(day) ? (
          <SelectedDayContainer
            key={uuidv4()}
            onClick={() => {
              lilius.setSelected([day]);
            }}
          >
            <BodyLarge>{dayjs(day).format('D')}</BodyLarge>
            {dayPlan ? (
              <Chip type={dayPlan[0].runType} distance={dayPlan[0].distance} />
            ) : (
              <Chip type={RunTypes.REST} />
            )}
          </SelectedDayContainer>
        ) : (
          <DayContainer
            key={uuidv4()}
            onClick={(e) => {
              lilius.setSelected([day]);
            }}
          >
            <BodyLarge>{dayjs(day).format('D')}</BodyLarge>
            {dayPlan ? (
              <Chip type={dayPlan[0].runType} distance={dayPlan[0].distance} />
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
};
