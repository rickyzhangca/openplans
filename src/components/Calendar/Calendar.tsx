import { PlusIcon, XIcon } from '@primer/octicons-react';
import { useTheme } from '@primer/react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { useAtom } from 'jotai';
import { v4 as uuidv4 } from 'uuid';
import { atoms } from '../../context/atoms';
import { Plan } from '../../hooks/usePlan';
import { BodyButton } from '../../theme/typography';
import {
  Container,
  MonthControlButton,
  MonthControlButtonAbsoluteContainer,
  MonthControlButtonContainer,
} from './Calendar.styles';
import { Month } from './Month/Month';

dayjs.extend(isBetween);

type CalendarProps = {
  plan: Plan;
  selected: Date;
  onSelect: (day: Date) => void;
};

export const Calendar = ({ plan, selected, onSelect }: CalendarProps) => {
  const [months] = useAtom(atoms.calendar);
  const theme = useTheme();

  const renderAddPreviousMonthButton = () => {
    const previousMonth = dayjs(months[0][1][0]).subtract(1, 'month');
    return (
      <MonthControlButton onClick={() => {}}>
        <PlusIcon />
        <BodyButton>{`${previousMonth.format('MMM')} ${previousMonth.format(
          'YYYY',
        )}`}</BodyButton>
      </MonthControlButton>
    );
  };

  const renderRemoveFirstMonthButton = () => {
    const firstMonth = dayjs(months[0][1][0]);
    const secondMonth = firstMonth.add(1, 'month');
    return (
      <MonthControlButton onClick={() => {}}>
        <XIcon fill={theme.theme.colors.danger.fg} />
        <BodyButton color={theme.theme.colors.danger.fg}>{`${firstMonth.format(
          'MMM',
        )} ${firstMonth.format('YYYY')}`}</BodyButton>
      </MonthControlButton>
    );
  };

  const renderAddNextMonthButton = () => {
    const nextMonth = dayjs(months[months.length - 1][1][0]).add(1, 'month');
    return (
      <MonthControlButton onClick={() => {}}>
        <PlusIcon />
        <BodyButton>{`${nextMonth.format('MMM')} ${nextMonth
          .add(1, 'month')
          .format('YYYY')}`}</BodyButton>
      </MonthControlButton>
    );
  };

  const renderRemoveLastMonthButton = () => {
    const lastMonth = dayjs(months[months.length - 1][1][0]);
    return (
      <MonthControlButton onClick={() => {}}>
        <XIcon fill={theme.theme.colors.danger.fg} />
        <BodyButton color={theme.theme.colors.danger.fg}>{`${lastMonth.format(
          'MMM',
        )} ${lastMonth.format('YYYY')}`}</BodyButton>
      </MonthControlButton>
    );
  };

  return (
    <Container>
      <MonthControlButtonAbsoluteContainer>
        {renderAddPreviousMonthButton()}
        {months.length > 1 && renderRemoveFirstMonthButton()}
      </MonthControlButtonAbsoluteContainer>
      {months.map((month) => (
        <Month
          key={uuidv4()}
          selected={selected}
          onSelect={onSelect}
          month={month}
          plan={plan}
        />
      ))}
      <MonthControlButtonContainer>
        {renderAddNextMonthButton()}
        {months.length > 1 && renderRemoveLastMonthButton()}
      </MonthControlButtonContainer>
    </Container>
  );
};
