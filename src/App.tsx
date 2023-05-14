import { BaseStyles, ThemeProvider, theme, themeGet } from '@primer/react';
import deepmerge from 'deepmerge';
import { Toaster } from 'react-hot-toast';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/Header/Header';
import { fromTheme } from './theme/fromTheme';

const withNavigation = (Component: any) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        maxWidth: '100%',
        height: '100vh',
        maxHeight: '100%',
      }}
    >
      <Header />
      {Component}
    </div>
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
    element: withNavigation(<Navigate replace to="/my-plans" />),
  },
  {
    path: '/my-plans',
    element: withNavigation(<>1</>),
  },
  {
    path: '/expert-plans',
    element: withNavigation(<>2</>),
  },
  {
    path: '/about',
    element: withNavigation(<>3</>),
  },
  {
    path: '*',
    element: withNavigation(<Navigate replace to="/my-plans" />),
  },
]);

const ExtendedBaseStyles = styled(BaseStyles)`
  font-family: 'Inter', ${themeGet(fromTheme.fonts.normal)};
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
