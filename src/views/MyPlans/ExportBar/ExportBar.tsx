import { MoveToBottomIcon } from '@primer/octicons-react';
import { FormControl, IconButton, SegmentedControl } from '@primer/react';

import { useState } from 'react';
import { exportPlanToPDF } from '../utils/exportPlanToPDF';
import {
  ExportBarContainer,
  ExportBarContentContainer,
} from './ExportBar.styles';

type ExportType = 'pdf' | 'png' | 'ics' | 'json';

type ExportBarProps = {
  calendar: JSX.Element;
};

export const ExportBar = ({ calendar }: ExportBarProps) => {
  const [exportType, setExportType] = useState<ExportType>('pdf');

  return (
    <ExportBarContainer>
      Export
      <ExportBarContentContainer>
        <FormControl>
          <FormControl.Label visuallyHidden>Export options</FormControl.Label>
          <SegmentedControl
            aria-label="export options"
            onChange={(i) => {
              switch (i) {
                case 0:
                  setExportType('pdf');
                  return;
                case 1:
                  setExportType('png');
                  return;
                case 2:
                  setExportType('ics');
                  return;
                case 3:
                  setExportType('json');
                  return;
              }
            }}
          >
            <SegmentedControl.Button
              defaultSelected
              aria-label="set export format to pdf"
              selected={exportType === 'pdf'}
            >
              PDF
            </SegmentedControl.Button>
            <SegmentedControl.Button
              aria-label="set export format to png"
              selected={exportType === 'png'}
            >
              PNG
            </SegmentedControl.Button>
            <SegmentedControl.Button
              aria-label="set export format to ics"
              selected={exportType === 'ics'}
            >
              ICS
            </SegmentedControl.Button>
            <SegmentedControl.Button
              aria-label="set export format to json"
              selected={exportType === 'json'}
            >
              JSON
            </SegmentedControl.Button>
          </SegmentedControl>
        </FormControl>
        <IconButton
          aria-label="export and download"
          icon={MoveToBottomIcon}
          onClick={() => {
            switch (exportType) {
              case 'pdf':
                exportPlanToPDF(calendar);
                return;
              case 'png':
                return;
              case 'ics':
                return;
              case 'json':
                return;
            }
          }}
        />
        <ExportBarContentContainer />
      </ExportBarContentContainer>
    </ExportBarContainer>
  );
};
