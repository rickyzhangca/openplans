import dayjs from 'dayjs';
import { useLilius } from 'use-lilius';
import { useEffectOnce, useLocalStorage } from 'usehooks-ts';
import { Calendar as CalendarComponent } from '../../components/Calendar/Calendar';
import { DayPlanViewer } from '../../components/DayPlanViewer/DayPlanViewer';
import usePlan, { RunTypes } from '../../hooks/usePlan';
import { Container, LeftContainer, RightContainer } from './Calendar.styles';
import { ExportBar } from './ExportBar/ExportBar';

export const Calendar = () => {
  const [numberOfMonths, setNumberOfMonths] = useLocalStorage(
    'number-of-months',
    2,
  );
  const [viewing, setViewing] = useLocalStorage(
    'default-viewing',
    dayjs().subtract(1, 'month').toDate(),
  );

  const lilius = useLilius({
    viewing: dayjs(viewing).toDate(),
    numberOfMonths,
  });
  const plan = usePlan();

  useEffectOnce(() => {
    const today = dayjs().startOf('day').toDate();
    lilius.setSelected([today]);
    plan.setDayPlan(today, [
      {
        runType: RunTypes.EASY_RUN,
        distance: 5,
      },
    ]);
  });

  const calendar = (
    <CalendarComponent
      lilius={lilius}
      plan={plan}
      setViewing={(day) => setViewing(day)}
      onSelect={(day) => lilius.setSelected([day])}
      onSetNumberOfMonths={(numberOfMonths) =>
        setNumberOfMonths(numberOfMonths)
      }
    />
  );

  return (
    <Container>
      <LeftContainer>
        <DayPlanViewer lilius={lilius} plan={plan} />
      </LeftContainer>
      <RightContainer>
        {calendar}
        <ExportBar calendar={calendar} />
      </RightContainer>
    </Container>
  );
};
