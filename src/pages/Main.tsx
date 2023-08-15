import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './Home';

const router = createBrowserRouter([{ path: '/', element: <Home /> }]);

const Main = () => {
  return (
    <Wrapper>
      <RouterProvider router={router} />
      <GlobalStyles />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin:0;
  }

  *{
    box-sizing:border-box;
  }
`;
