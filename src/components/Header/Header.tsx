import { useNavigate } from 'react-router-dom';
import useScrollPosition from '../../hooks/useScrollPosition';
import { HeaderTabsType } from '../../types/ui';
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

type HeaderProps = {
  tabs: HeaderTabsType;
};

export const Header = ({ tabs }: HeaderProps) => {
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();

  return (
    <Wrapper minimal={scrollPosition > 0}>
      <Container minimal={scrollPosition > 0}>
        <LeftContainer>
          <LogoContainer onClick={() => navigate('/')}>
            <Logo />
          </LogoContainer>
          <HeaderTabs tabs={tabs} />
        </LeftContainer>
        <RightContainer>
          <HeaderGitHubButton />
        </RightContainer>
      </Container>
    </Wrapper>
  );
};
