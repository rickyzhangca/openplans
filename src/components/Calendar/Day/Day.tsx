import * as Popover from '@radix-ui/react-popover';
import dayjs from 'dayjs';
import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DayPlan, RunTypes } from '../../../hooks/usePlan';
import { BodyLarge } from '../../../theme/typography';
import { Chip } from '../../Chip/Chip';
import {
  DayContainer,
  EmptyDayContainer,
  SelectedDayContainer,
} from './Day.styles';

type DayProps = {
  selected: Date;
  onSelect: (day: Date) => void;
  day: Date;
  dayPlan: DayPlan[];
  firstDayOfMonth: Date;
  lastDayOfMonth: Date;
};

export const Day = memo(
  ({
    selected,
    onSelect,
    day,
    dayPlan,
    firstDayOfMonth,
    lastDayOfMonth,
  }: DayProps) => {
    const withPopover = (Component: JSX.Element) => {
      return (
        <Popover.Root open={false}>
          <Popover.Trigger asChild>{Component}</Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="PopoverContent" sideOffset={5}>
              content
              <Popover.Close className="PopoverClose" aria-label="Close">
                close
              </Popover.Close>
              <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      );
    };

    if (dayjs(day).isBetween(firstDayOfMonth, lastDayOfMonth, 'day', '[]')) {
      return dayjs(selected).isSame(day)
        ? withPopover(
            <SelectedDayContainer key={uuidv4()} onClick={() => onSelect(day)}>
              <BodyLarge>{dayjs(day).format('D')}</BodyLarge>
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
              <BodyLarge>{dayjs(day).format('D')}</BodyLarge>
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
