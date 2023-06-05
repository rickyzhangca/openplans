import { PlusIcon } from '@primer/octicons-react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { Returns } from 'use-lilius';
import { v4 as uuidv4 } from 'uuid';
import { Plan } from '../../hooks/usePlan';
import {
  AddMonthButtonContainer,
  AddPreviousMonthButtonWrapper,
  Container,
} from './Calendar.styles';
import { Month } from './Month/Month';
dayjs.extend(isBetween);

type CalendarProps = {
  lilius: Returns;
  plan: Plan;
  onSetNumberOfMonths: (numberOfMonths: number) => void;
};

export const Calendar = ({
  lilius,
  plan,
  onSetNumberOfMonths,
}: CalendarProps) => {
  const months = lilius.calendar;

  const renderAddPreviousMonthButton = () => {
    const previousMonth = dayjs(months[0][1][0]).subtract(1, 'month');
    return (
      <AddPreviousMonthButtonWrapper>
        <AddMonthButtonContainer
          onClick={() => {
            lilius.viewPreviousMonth();
            onSetNumberOfMonths(lilius.calendar.length + 1);
          }}
        >
          <PlusIcon />
          {`${previousMonth.format('MMM')} ${previousMonth.format('YYYY')}`}
        </AddMonthButtonContainer>
      </AddPreviousMonthButtonWrapper>
    );
  };

  const renderAddNextMonthButton = () => {
    const nextMonth = dayjs(months[months.length - 1][1][0]).add(1, 'month');
    return (
      <AddMonthButtonContainer
        onClick={() => {
          onSetNumberOfMonths(lilius.calendar.length + 1);
        }}
      >
        <PlusIcon />
        {`${nextMonth.format('MMM')} ${nextMonth
          .add(1, 'month')
          .format('YYYY')}`}
      </AddMonthButtonContainer>
    );
  };

  return (
    <Container>
      {renderAddPreviousMonthButton()}
      {months.map((month) => (
        <Month
          key={uuidv4()}
          selected={lilius.selected ? lilius.selected[0] : null}
          onSelect={(day) => lilius.setSelected([day])}
          month={month}
          plan={plan}
        />
      ))}
      {renderAddNextMonthButton()}
    </Container>
  );
};
