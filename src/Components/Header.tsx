import styled from 'styled-components';
import { INavItens } from '../interfaces/INavItens';

interface IProps {
  navItens?: INavItens[];
}

const Header = ({ navItens }: IProps) => {
  return (
    <Navbar>
      <NavHome>
        <p>Roboto Home</p>
      </NavHome>
      <ul>
        {navItens?.map((item, idx) => (
          <NavItens key={idx}>{item.title}</NavItens>
        ))}
      </ul>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  background-color: ${(props) => props.theme['surface-mixed-400']};
  margin: 0;
  color: ${(props) => props.theme['on-surface-mixed']};
  padding: 10px 15px 12px;

  ul {
    list-style-type: none;
    margin: 0;
  }
`;

const NavItens = styled.li`
  border: 1px solid ${(props) => props.theme.onPrimary};
  padding: 8px 10px;
  font-size: 1.5rem;
  font-weight: 300;
`;

const NavHome = styled.div`
  font-size: 2rem;
  font-weight: 500;

  p {
    margin: 0px;
  }
`;
