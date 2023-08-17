import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/logo.png';
import ThemeToggle from './ThemeToggle';
import { INavItens } from '../interfaces/INavItens';

interface IProps {
  navItens?: INavItens[];
}

const Header = ({ navItens }: IProps) => {
  const location = useLocation();

  return (
    <Navbar>
      <div>
        <NavHome>
          <Link to={'/'}>
            <img src={logo} alt="Home" />
          </Link>
        </NavHome>
      </div>
      <div>
        <ul>
          {navItens?.map((item, idx) => (
            <NavItens active={location.pathname === item.route} key={idx}>
              <Link to={item.route}>{item.title}</Link>
            </NavItens>
          ))}
        </ul>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.div`
  display: grid;
  grid-template-columns: 100px auto 50px;
  justify-items: start;
  align-items: center;
  width: 100vw;
  background-color: ${(props) => props.theme['surface-mixed-400']};
  margin: 0;
  padding: 10px 15px 12px;

  & ul {
    list-style-type: none;
    margin: 0;
  }
`;

const NavItens = styled.li<{ active: boolean }>`
  position: relative;
  display: block;
  border: 0.2em solid ${(props) => props.theme['primary-600']};
  padding: 8px 10px;
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;
  background-color: transparent;
  transition: all 0.35s;
  cursor: pointer;

  & a {
    position: relative;
    color: ${({ active, theme }) => (active ? theme['surface-mixed-400'] : theme['primary-600'])};
    z-index: 2;
    text-decoration: none;
  }

  &:hover {
    color: ${(props) => props.theme['on-primary-100']};
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${({ active }) => (active ? '100%' : 0)};
    height: 100%;
    background: ${(props) => props.theme['primary-600']};
    transition: all 0.35s;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover a {
    color: ${(props) => props.theme['surface-mixed-400']};
  }
`;

const NavHome = styled.div`
  font-size: 2rem;
  font-weight: 500;

  & p {
    margin: 0px;
  }

  & img {
    width: 100px;
  }
`;
