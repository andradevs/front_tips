import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import { ThemeProvider } from './contexts/ThemeProvider';

const router = createBrowserRouter([{ path: '/', element: <Home /> }]);

const GlobalStyles = createGlobalStyle`
  body {
    margin:0;
  }

  *{
    box-sizing:border-box;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>,
);
