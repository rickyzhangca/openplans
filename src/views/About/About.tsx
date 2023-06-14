import {
  Container,
  HeaderSection,
  HeaderSectionImage,
  HeaderSectionText,
} from './About.styles';

import headerLogo from './assets/headerLogo.svg';

export const About = () => {
  return (
    <Container>
      <HeaderSection>
        <HeaderSectionImage src={headerLogo} />
        <HeaderSectionText>
          An open-sourced running plan generator to make your training easy.
        </HeaderSectionText>
      </HeaderSection>
    </Container>
  );
};
