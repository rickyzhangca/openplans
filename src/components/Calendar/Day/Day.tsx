import * as Popover from '@radix-ui/react-popover';
import dayjs from 'dayjs';
import { memo } from 'react';
import { Returns } from 'use-lilius';
import { v4 as uuidv4 } from 'uuid';
import { DayPlan, Plan, RunTypes } from '../../../hooks/usePlan';
import { BodyMedium } from '../../../theme/typography';
import { Chip } from '../../Chip/Chip';
import { DayPlanViewer } from '../../DayPlanViewer/DayPlanViewer';
import {
  DayContainer,
  EmptyDayContainer,
  SelectedDayContainer,
  StyledPopoverRoot,
} from './Day.styles';

type DayProps = {
  selected: Date;
  onSelect: (day: Date) => void;
  day: Date;
  dayPlan: DayPlan[];
  firstDayOfMonth: Date;
  lastDayOfMonth: Date;
  // STUB - remove lilius
  lilius: Returns;
  plan: Plan;
};

export const Day = memo(
  ({
    selected,
    onSelect,
    day,
    dayPlan,
    firstDayOfMonth,
    lastDayOfMonth,
    lilius,
    plan,
  }: DayProps) => {
    const isSelected = selected === day;

    const withPopover = (Component: JSX.Element) => {
      return (
        <StyledPopoverRoot
          open={isSelected}
          onOpenChange={(open) => {
            if (!open) {
              lilius.setSelected([]);
            }
          }}
        >
          <Popover.Trigger asChild>{Component}</Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              side="right"
              sideOffset={5}
              collisionPadding={{ top: 120 }}
            >
              <DayPlanViewer lilius={lilius} day={day} plan={plan} />
              <Popover.Arrow />
            </Popover.Content>
          </Popover.Portal>
        </StyledPopoverRoot>
      );
    };

    if (dayjs(day).isBetween(firstDayOfMonth, lastDayOfMonth, 'day', '[]')) {
      return isSelected
        ? withPopover(
            <SelectedDayContainer key={uuidv4()} onClick={() => onSelect(day)}>
              <BodyMedium>{dayjs(day).format('D')}</BodyMedium>
              {dayPlan ? (
                <Chip
                  type={dayPlan[0].runType}
                  distance={dayPlan[0].distance}
                />
              ) : (
                <Chip type={RunTypes.REST} />
              )}
            </SelectedDayContainer>,
          )
        : withPopover(
            <DayContainer key={uuidv4()} onClick={() => onSelect(day)}>
              <BodyMedium>{dayjs(day).format('D')}</BodyMedium>
              {dayPlan ? (
                <Chip
                  type={dayPlan[0].runType}
                  distance={dayPlan[0].distance}
                />
              ) : (
                <Chip type={RunTypes.REST} />
              )}
            </DayContainer>,
          );
    }
    return withPopover(<EmptyDayContainer key={uuidv4()} />);
  },
);
