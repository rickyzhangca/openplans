import { Returns } from 'use-lilius';
import { v4 as uuidv4 } from 'uuid';
import { Plan } from '../../../hooks/usePlan';
import { Day } from '../Day/Day';
import { WeekContainer } from './Week.styles';

type WeekProps = {
  lilius: Returns;
  week: Date[];
  plan: Plan;
  firstDayOfMonth: Date;
  lastDayOfMonth: Date;
};

export const Week = ({
  lilius,
  week,
  plan,
  firstDayOfMonth,
  lastDayOfMonth,
}: WeekProps) => {
  return (
    <WeekContainer>
      {week.map((day) => (
        <Day
          key={uuidv4()}
          lilius={lilius}
          day={day}
          dayPlan={
            plan.data[day.toISOString()] ? plan.data[day.toISOString()] : null
          }
          firstDayOfMonth={firstDayOfMonth}
          lastDayOfMonth={lastDayOfMonth}
        />
      ))}
    </WeekContainer>
  );
};
