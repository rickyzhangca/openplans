import { useEffect } from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import { Logo } from '../Logo/Logo';
import {
  Container,
  LeftContainer,
  LogoContainer,
  RightContainer,
  Wrapper,
} from './Header.styles';
import { HeaderGitHubButton } from './HeaderGitHubButton';
import { HeaderTabs } from './HeaderTabs/HeaderTabs';

export const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <Wrapper>
      <Container minimal={scrollPosition > 0}>
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
    </Wrapper>
  );
};
