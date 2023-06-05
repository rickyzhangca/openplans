import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  return (
    <Wrapper minimal={scrollPosition > 0}>
      <Container minimal={scrollPosition > 0}>
        <LeftContainer>
          <LogoContainer onClick={() => navigate('/')}>
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
