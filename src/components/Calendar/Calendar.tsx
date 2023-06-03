import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { Returns } from 'use-lilius';
import { v4 as uuidv4 } from 'uuid';
import { Plan } from '../../hooks/usePlan';
import { TitleMedium } from '../../theme/typography';
import {
  AddMonthButtonContainer,
  Container,
  DayName,
  DayNamesContainer,
  MonthContainer,
  MonthHeader,
} from './Calendar.styles';
import { Week } from './Week/Week';
dayjs.extend(isBetween);

type CalendarProps = {
  lilius: Returns;
  plan: Plan;
};

export const Calendar = ({ lilius, plan }: CalendarProps) => {
  const months = lilius.calendar;

  const renderMonth = (month: Date[][]) => {
    const firstDayOfMonth = dayjs(month[1][0]).startOf('month').toDate();
    const lastDayOfMonth = dayjs(firstDayOfMonth).endOf('month').toDate();

    const renderMonthHeader = () => (
      <MonthHeader>
        <TitleMedium>{`${dayjs(firstDayOfMonth).format('MMM')} ${dayjs(
          firstDayOfMonth,
        ).format('YYYY')}`}</TitleMedium>
        <AddMonthButtonContainer>Add</AddMonthButtonContainer>
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
            lilius={lilius}
            week={week}
            plan={plan}
            firstDayOfMonth={firstDayOfMonth}
            lastDayOfMonth={lastDayOfMonth}
          />
        ))}
      </MonthContainer>
    );
  };

  return <Container>{months.map((month) => renderMonth(month))}</Container>;
};
