import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { useEffectOnce } from 'usehooks-ts';
import { Calendar as CalendarComponent } from '../../components/Calendar/Calendar';
import { atoms } from '../../context/atoms';
import usePlan, { RunTypes } from '../../hooks/usePlan';
import { Container, LeftContainer, RightContainer } from './Calendar.styles';
import { ExportBar } from './ExportBar/ExportBar';

export const Calendar = () => {
  const [selectedDates, setSelectedDates] = useAtom(atoms.selectedDates);

  const plan = usePlan();

  useEffectOnce(() => {
    plan.setDayPlan(dayjs().startOf('day').toDate(), [
      {
        runType: RunTypes.EASY_RUN,
        distance: 5,
      },
    ]);
  });

  const calendar = (
    <CalendarComponent
      plan={plan}
      selected={selectedDates[0]}
      onSelect={(day) => setSelectedDates([day])}
    />
  );

  return (
    <Container>
      <LeftContainer>put a month list</LeftContainer>
      <RightContainer>
        {calendar}
        <ExportBar calendar={calendar} />
      </RightContainer>
    </Container>
  );
};
