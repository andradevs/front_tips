import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './Home';
import Header from '../Components/Header';
import { NAVITENS } from '../utils/utils';

const router = createBrowserRouter([{ path: '/', element: <Home /> }]);

const Main = () => {
  return (
    <Wrapper>
      <Header navItens={NAVITENS} />
      <RouterProvider router={router} />
      <GlobalStyles />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme['surface-100']};
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin:0;
  }

  *{
    box-sizing:border-box;
    font-family: "Roboto", sans-serif;
  }
`;
