import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Plan } from '../../../hooks/usePlan';
import { Day } from '../Day/Day';
import { WeekContainer } from './Week.styles';

type WeekProps = {
  selected: Date;
  onSelect: (day: Date) => void;
  week: Date[];
  plan: Plan;
  firstDayOfMonth: Date;
  lastDayOfMonth: Date;
};

export const Week = memo(
  ({
    selected,
    onSelect,
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
            day={day}
            selected={selected}
            onSelect={onSelect}
            dayPlan={
              plan.data[day.toISOString()] ? plan.data[day.toISOString()] : null
            }
            firstDayOfMonth={firstDayOfMonth}
            lastDayOfMonth={lastDayOfMonth}
            plan={plan}
          />
        ))}
      </WeekContainer>
    );
  },
);
