import { BodyLarge } from '../../theme/typography';
import { Container, HeaderSection, HeaderSectionImage } from './About.styles';

import headerLogo from './assets/headerLogo.svg';

export const About = () => {
  return (
    <Container>
      <HeaderSection>
        <HeaderSectionImage src={headerLogo} />
        <BodyLarge>
          An open-sourced running plan generator to make your training easy.
        </BodyLarge>
      </HeaderSection>
    </Container>
  );
};
