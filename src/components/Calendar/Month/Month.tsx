import dayjs from 'dayjs';
import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Plan } from '../../../hooks/usePlan';
import { TitleMedium } from '../../../theme/typography';
import { Week } from '../Week/Week';
import {
  DayName,
  DayNamesContainer,
  MonthContainer,
  MonthHeader,
} from './Month.styles';

type MonthProps = {
  selected: Date;
  onSelect: (day: Date) => void;
  month: Date[][];
  plan: Plan;
};

export const Month = memo(({ selected, onSelect, month, plan }: MonthProps) => {
  const firstDayOfMonth = dayjs(month[1][0]).startOf('month').toDate();
  const lastDayOfMonth = dayjs(firstDayOfMonth).endOf('month').toDate();

  const renderMonthHeader = () => (
    <MonthHeader>
      <TitleMedium>{`${dayjs(firstDayOfMonth).format('MMM')} ${dayjs(
        firstDayOfMonth,
      ).format('YYYY')}`}</TitleMedium>
    </MonthHeader>
  );

  const renderDayNames = () => (
    <DayNamesContainer>
      {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
        <DayName key={day}>{day}</DayName>
      ))}
    </DayNamesContainer>
  );

  return (
    <MonthContainer key={uuidv4()}>
      {renderMonthHeader()}
      {renderDayNames()}
      {month.map((week) => (
        <Week
          key={uuidv4()}
          selected={selected}
          onSelect={onSelect}
          week={week}
          plan={plan}
          firstDayOfMonth={firstDayOfMonth}
          lastDayOfMonth={lastDayOfMonth}
        />
      ))}
    </MonthContainer>
  );
});
