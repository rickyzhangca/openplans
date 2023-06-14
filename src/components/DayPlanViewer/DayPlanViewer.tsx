import { XCircleFillIcon } from '@primer/octicons-react';
import { FormControl, TextInput } from '@primer/react';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Returns } from 'use-lilius';
import { Plan, RunTypes } from '../../hooks/usePlan';
import { Display, TitleSmall } from '../../theme/typography';
import { DayPlanOptions } from './DayPlanOptions/DayPlanOptions';
import {
  ConfigsContainer,
  Container,
  HeaderContainer,
  HeaderPlaceholderText,
  HeaderXIconWrapper,
} from './DayPlanViewer.styles';

type DayPlanViewerProps = {
  lilius: Returns;
  plan: Plan;
};

export const DayPlanViewer = ({ lilius, plan }: DayPlanViewerProps) => {
  const selectedDay = lilius.selected.length === 0 ? null : lilius.selected[0];

  const hasDayPlan = selectedDay
    ? !!plan.data[selectedDay.toISOString()]
    : false;

  const [runType, setRunType] = useState(null);
  const [currentDistance, setCurrentDistance] = useState('');

  useEffect(() => {
    setRunType(
      selectedDay
        ? hasDayPlan
          ? plan.data[selectedDay.toISOString()][0].runType
          : RunTypes.REST
        : null,
    );
    setCurrentDistance(
      hasDayPlan
        ? plan.data[selectedDay.toISOString()][0].distance.toString()
        : '5',
    );
  }, [selectedDay ? plan.data[selectedDay.toISOString()] : selectedDay]);

  const renderHeader = () => {
    const renderHeaderXIcon = (
      <HeaderXIconWrapper onClick={() => lilius.setSelected([])}>
        <XCircleFillIcon />
      </HeaderXIconWrapper>
    );
    return (
      <HeaderContainer>
        {selectedDay ? (
          <>
            {renderHeaderXIcon}
            <TitleSmall>{dayjs(selectedDay).format('MMM')}</TitleSmall>
            <Display>{selectedDay.getDate()}</Display>
          </>
        ) : (
          <HeaderPlaceholderText>
            Choose a day on calendar
          </HeaderPlaceholderText>
        )}
      </HeaderContainer>
    );
  };

  const renderOptions = () => (
    <DayPlanOptions
      selected={runType}
      onSelect={(type) => {
        if (type === RunTypes.REST) {
          plan.removeDayPlan(selectedDay);
        } else {
          plan.setDayPlan(selectedDay, [
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
      <FormControl disabled={!selectedDay || runType === RunTypes.REST}>
        <FormControl.Label>Distance</FormControl.Label>
        <TextInput
          value={currentDistance}
          onChange={(e) => setCurrentDistance(e.target.value)}
          onBlur={() =>
            plan.setDayPlan(selectedDay, [
              {
                runType,
                distance: Number(currentDistance),
              },
            ])
          }
          trailingVisual="km"
          aria-label="Distance to run"
          name="distance"
          placeholder="5"
        />
      </FormControl>
    </ConfigsContainer>
  );

  return (
    <Container hasSelectedDay={!!selectedDay}>
      {renderHeader()}
      {renderOptions()}
      {renderConfigs()}
    </Container>
  );
};
