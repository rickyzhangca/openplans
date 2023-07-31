import { XCircleFillIcon } from '@primer/octicons-react';
import { FormControl, TextInput } from '@primer/react';
import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { atoms } from '../../context/atoms';
import { Plan, RunTypes } from '../../hooks/usePlan';
import { Display, TitleSmall } from '../../theme/typography';
import { DayPlanOptions } from './DayPlanOptions/DayPlanOptions';
import {
  ConfigsContainer,
  Container,
  HeaderContainer,
  HeaderXIconWrapper,
} from './DayPlanViewer.styles';

type DayPlanViewerProps = {
  day: Date;
  plan: Plan;
};

export const DayPlanViewer = ({ day, plan }: DayPlanViewerProps) => {
  const hasDayPlan = !!plan.data[day.toISOString()];

  const [runType, setRunType] = useState(RunTypes.REST);
  const [currentDistance, setCurrentDistance] = useState('');

  const [, setSelectedDates] = useAtom(atoms.selectedDates);

  useEffect(() => {
    setRunType(
      hasDayPlan ? plan.data[day.toISOString()][0].runType : RunTypes.REST,
    );
    setCurrentDistance(
      hasDayPlan ? plan.data[day.toISOString()][0].distance.toString() : '5',
    );
  }, [day, hasDayPlan, plan.data]);

  const renderHeader = () => {
    const renderHeaderXIcon = (
      <HeaderXIconWrapper onClick={() => setSelectedDates([])}>
        <XCircleFillIcon />
      </HeaderXIconWrapper>
    );
    return (
      <HeaderContainer>
        {renderHeaderXIcon}
        <TitleSmall>{dayjs(day).format('MMM')}</TitleSmall>
        <Display>{day.getDate()}</Display>
      </HeaderContainer>
    );
  };

  const renderOptions = () => (
    <DayPlanOptions
      selected={runType}
      onSelect={(type) => {
        if (type === RunTypes.REST) {
          plan.removeDayPlan(day);
        } else {
          plan.setDayPlan(day, [
            {
              runType: type,
              distance: Number(currentDistance),
            },
          ]);
        }
      }}
    />
  );

  const renderConfigs = () => (
    <ConfigsContainer>
      <FormControl disabled={!day || runType === RunTypes.REST}>
        <FormControl.Label>Distance</FormControl.Label>
        <TextInput
          value={currentDistance}
          onChange={(e) => setCurrentDistance(e.target.value)}
          trailingVisual="km"
          aria-label="Distance to run"
          name="distance"
          placeholder="5"
        />
      </FormControl>
    </ConfigsContainer>
  );

  return (
    <Container>
      {renderHeader()}
      {renderOptions()}
      {renderConfigs()}
      <button
        onClick={() => {
          plan.setDayPlan(day, [
            {
              runType,
              distance: Number(currentDistance),
            },
          ]);
          setSelectedDates([]);
        }}
      >
        Save
      </button>
    </Container>
  );
};
