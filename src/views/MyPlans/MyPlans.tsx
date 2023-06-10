import dayjs from 'dayjs';
import { useLilius } from 'use-lilius';
import { useEffectOnce, useLocalStorage } from 'usehooks-ts';
import { Calendar } from '../../components/Calendar/Calendar';
import { DayPlanViewer } from '../../components/DayPlanViewer/DayPlanViewer';
import usePlan, { RunTypes } from '../../hooks/usePlan';
import { Container, LeftContainer, RightContainer } from './MyPlans.styles';

export const MyPlans = () => {
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
    numberOfMonths: numberOfMonths,
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
    <Calendar
      lilius={lilius}
      plan={plan}
      setViewing={(day) => setViewing(day)}
      onSetNumberOfMonths={(numberOfMonths) =>
        setNumberOfMonths(numberOfMonths)
      }
    />
  );

  return (
    <Container>
      <LeftContainer>{calendar}</LeftContainer>
      <RightContainer>
        <DayPlanViewer lilius={lilius} plan={plan} />
      </RightContainer>
    </Container>
  );
};
