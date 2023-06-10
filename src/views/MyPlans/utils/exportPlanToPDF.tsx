import { Document, Page, View, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

export const exportPlanToPDF = async (calendar: JSX.Element) => {
  const blob = await pdf(
    <Document>
      <Page size="A4">
        <View>{calendar}</View>
      </Page>
    </Document>,
  ).toBlob();
  saveAs(blob, 'yes.pdf');
};
