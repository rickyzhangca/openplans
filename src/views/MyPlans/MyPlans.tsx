import { MoveToBottomIcon } from '@primer/octicons-react';
import { FormControl, IconButton, SegmentedControl } from '@primer/react';
import dayjs from 'dayjs';
import { useLilius } from 'use-lilius';
import { useEffectOnce, useLocalStorage } from 'usehooks-ts';
import { Calendar } from '../../components/Calendar/Calendar';
import { DayPlanViewer } from '../../components/DayPlanViewer/DayPlanViewer';
import usePlan, { RunTypes } from '../../hooks/usePlan';
import {
  Container,
  ExportBarContainer,
  ExportBarContentContainer,
  LeftContainer,
  RightContainer,
} from './MyPlans.styles';

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
        distance: 4.8,
      },
    ]);
  });

  return (
    <Container>
      <LeftContainer>
        <Calendar
          lilius={lilius}
          plan={plan}
          setViewing={(day) => setViewing(day)}
          onSetNumberOfMonths={(numberOfMonths) =>
            setNumberOfMonths(numberOfMonths)
          }
        />
        <ExportBarContainer>
          Export
          <ExportBarContentContainer>
            <FormControl>
              <FormControl.Label visuallyHidden>
                Export options
              </FormControl.Label>
              <SegmentedControl aria-label="export options">
                <SegmentedControl.Button
                  defaultSelected
                  aria-label="set export format to pdf"
                >
                  PDF
                </SegmentedControl.Button>
                <SegmentedControl.Button aria-label="set export format to png">
                  PNG
                </SegmentedControl.Button>
                <SegmentedControl.Button aria-label="set export format to ics">
                  ICS
                </SegmentedControl.Button>
                <SegmentedControl.Button aria-label="set export format to json">
                  JSON
                </SegmentedControl.Button>
              </SegmentedControl>
            </FormControl>
            <IconButton
              aria-label="export and download"
              icon={MoveToBottomIcon}
            />
            <ExportBarContentContainer />
          </ExportBarContentContainer>
        </ExportBarContainer>
      </LeftContainer>
      <RightContainer>
        <DayPlanViewer lilius={lilius} plan={plan} />
      </RightContainer>
    </Container>
  );
};
