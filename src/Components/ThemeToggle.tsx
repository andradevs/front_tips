import styled from 'styled-components';
import Switch from 'react-switch';
import { useThemeContext } from '../contexts/ThemeProvider';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeToggle = () => {
  const { toggleTheme, theme } = useThemeContext();

  const LightIcon = () => (
    <LightWrapper>
      <BsSun />
    </LightWrapper>
  );

  const DarkIcon = () => (
    <DarkWrapper>
      <BsMoon />
    </DarkWrapper>
  );

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      <Switch
        onChange={toggleTheme}
        onColor="#f5f5f5"
        offColor="#333333"
        checkedIcon={<LightIcon />}
        uncheckedIcon={<DarkIcon />}
        checked={theme === 'light' ? true : false}
      />
    </label>
  );
};

const LightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 20;
`;

const DarkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 20;
  color: #fafafa;
`;

export default ThemeToggle;
