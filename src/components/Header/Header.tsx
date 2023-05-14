import { Logo } from '../Logo/Logo';
import {
  Container,
  LeftContainer,
  LogoContainer,
  RightContainer,
} from './Header.styles';
import { HeaderGitHubButton } from './HeaderGitHubButton';
import { HeaderTabs } from './HeaderTabs/HeaderTabs';

export const Header = () => {
  return (
    <Container>
      <LeftContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <HeaderTabs />
      </LeftContainer>
      <RightContainer>
        <HeaderGitHubButton />
      </RightContainer>
    </Container>
  );
};
