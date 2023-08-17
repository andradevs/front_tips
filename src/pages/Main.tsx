import { Outlet } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../Components/Header';
import { NAVITENS } from '../utils/utils';

const Main = () => {
  return (
    <Wrapper>
      <Header navItens={NAVITENS} />
      <Container>
        <Outlet />
      </Container>
      <GlobalStyles />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;
  min-height: 100vh;
  background-color: ${(props) => props.theme['surface-200']};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  color: ${(props) => props.theme['on-surface']};
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
