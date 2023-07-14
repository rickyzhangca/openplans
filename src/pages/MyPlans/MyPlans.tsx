import * as Popover from '@radix-ui/react-popover';
import { Chip } from '../../components/Chip/Chip';
import { RunTypes } from '../../hooks/usePlan';

export const MyPlans = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Chip type={RunTypes.REST} />
      </Popover.Trigger>
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
