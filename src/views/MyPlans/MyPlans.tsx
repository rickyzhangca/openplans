import { MoveToBottomIcon } from '@primer/octicons-react';
import { FormControl, IconButton, SegmentedControl } from '@primer/react';
import { useLilius } from 'use-lilius';
import { Calendar } from '../../components/Calendar/Calendar';
import {
  Container,
  ExportBarContainer,
  ExportBarContentContainer,
  LeftContainer,
  RightContainer,
} from './MyPlans.styles';

export const MyPlans = () => {
  const lilius = useLilius({ numberOfMonths: 3 });
  console.log(lilius.calendar);
  console.log(lilius.viewing);

  return (
    <Container>
      <LeftContainer>
        <Calendar />
        <ExportBarContainer>
          Export
          <ExportBarContentContainer>
            <FormControl>
              <SegmentedControl>
                <SegmentedControl.Button defaultSelected>
                  PDF
                </SegmentedControl.Button>
                <SegmentedControl.Button>PNG</SegmentedControl.Button>
                <SegmentedControl.Button>ICS</SegmentedControl.Button>
                <SegmentedControl.Button>JSON</SegmentedControl.Button>
              </SegmentedControl>
            </FormControl>
            <IconButton aria-label="Download" icon={MoveToBottomIcon} />
            <ExportBarContentContainer />
          </ExportBarContentContainer>
        </ExportBarContainer>
      </LeftContainer>
      <RightContainer></RightContainer>
    </Container>
  );
};
