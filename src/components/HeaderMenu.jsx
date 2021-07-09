import { useState } from 'react';
import styled from '@emotion/styled';
import theme from '../themes/theme';
import HeaderList from './HeaderList';

const Li = styled.li`
  position: relative;
  height: 100%;
  margin-top: 25px;
  padding: 20px 0px;
  padding-left: 10px;
  ${(props) =>
    props.isActive &&
    `background-color: ${theme.subColor}; color: ${theme.subTextColor};`};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  &:hover {
    background-color: ${theme.subColor};
    color: ${theme.subTextColor};
  }
`;
const B = styled.b`
  position: absolute;
  width: 96%;
  height: 20px;
  background-color: ${theme.subColor};
  display: none;
  ${(props) => props.isActive && `display: block;`};
  &:nth-of-type(1) {
    top: -20px;
    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      border-bottom-right-radius: 20px;
      background-color: ${theme.mainColor};
    }
  }
  &:nth-of-type(2) {
    top: 67px;
    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      border-top-right-radius: 20px;
      background-color: ${theme.mainColor};
    }
  }
`;

const Ul = styled.ul`
  padding: 0;
  position: relative;
  list-style: none;
  width: 220px;
  font-size: ${theme.fontSize};
`;

const Section = styled.section`
  margin: 0px;
  padding: 20px;
  padding-left: 30px;
  position: relative;
  width: 200px;
  height: 500px;
  justify-content: space-between;
  color: ${theme.mainTextColor};

  h1 {
    font-size: 30px;
    margin-top: 10px;
  }
  h1,
  li {
    cursor: pointer;
  }
`;
const MainDiv = styled.section`
  margin: 20px;
  padding: 0;
  display: flex;
  border-radius: 15px;
  width: 800px;
  border-color: red;
  background-color: ${theme.mainColor};
`;

const menuListId = {
  1: <HeaderList page="1" />,
  2: <HeaderList page="2" />,
  3: <HeaderList page="3" />,
};

const HeaderMenu = () => {
  const [activeMenuId, setActiveMenuTab] = useState(1);
  const [isActive, setIsActive] = useState(1);

  const handleMenuId = (id) => {
    setActiveMenuTab(id);
    setIsActive(id);
  };

  return (
    <MainDiv>
      <Section>
        <h1 onClick={() => handleMenuId(1)}>React Edu</h1>
        <Ul>
          <Li isActive={isActive === 1 && true} onClick={() => handleMenuId(1)}>
            <B isActive={isActive === 1 && true}></B>
            <B isActive={isActive === 1 && true}></B>
            Game
          </Li>
          <Li isActive={isActive === 2 && true} onClick={() => handleMenuId(2)}>
            <B isActive={isActive === 2 && true}></B>
            <B isActive={isActive === 2 && true}></B>
            Language
          </Li>
          <Li isActive={isActive === 3 && true} onClick={() => handleMenuId(3)}>
            <B isActive={isActive === 3 && true}></B>
            <B isActive={isActive === 3 && true}></B>
            Hobby
          </Li>
        </Ul>
      </Section>
      {menuListId[activeMenuId]}
    </MainDiv>
  );
};

export default HeaderMenu;
