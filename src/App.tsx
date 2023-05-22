import { BaseStyles, ThemeProvider, theme, themeGet } from '@primer/react';
import deepmerge from 'deepmerge';
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/Header/Header';
import { fromTheme } from './theme/fromTheme';
import { MyPlans } from './views/MyPlans/MyPlans';

const withNavigation = (Component: any) => {
  return (
    <>
      <Header />
      {Component}
    </>
  );
};

const withTitle = (title: string, Component: any) => {
  return (
    <>
      <Helmet>
        <title>{title} - OpenPlans</title>
      </Helmet>
      {Component}
    </>
  );
};

export const tabs = [
  {
    title: 'My plans',
    value: 'my-plans',
  },
  {
    title: 'Expert plans',
    value: 'expert-plans',
  },
  {
    title: 'About',
    value: 'about',
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate replace to="/my-plans" />,
  },
  {
    path: '/my-plans',
    element: withTitle('My Plans', withNavigation(<MyPlans />)),
  },
  {
    path: '/expert-plans',
    element: withTitle('Expert Plans', withNavigation(<>2</>)),
  },
  {
    path: '/about',
    element: withTitle('About', withNavigation(<>3</>)),
  },
  {
    path: '*',
    element: <Navigate replace to="/my-plans" />,
  },
]);

const ExtendedBaseStyles = styled(BaseStyles)`
  font-family: 'Inter', ${themeGet(fromTheme.fonts.normal)};
  font-size: ${themeGet(fromTheme.fontSizes[1])};
  div {
    transition: 0.1s ${themeGet(fromTheme.animation.easeOutCubic)};
  }
`;

function App() {
  const bentoGridsTheme = deepmerge(theme, {});

  return (
    <ThemeProvider theme={bentoGridsTheme}>
      <ExtendedBaseStyles>
        <RouterProvider router={router} />
        <Toaster />
      </ExtendedBaseStyles>
    </ThemeProvider>
  );
}

export default App;
