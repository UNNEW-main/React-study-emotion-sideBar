import styled from '@emotion/styled'
import { useEffect, useState } from 'react';
import theme from '../themes/theme';
import menuListData from '../allData/menuListData';

const Li = styled.li`
  text-align: center;
  height: 50px;
  padding: 30px;

  color: ${theme.subTextColor};
  font-size: ${theme.fontSize};
`
const Ul = styled.ul`
  padding: 0;
  margin: 10px;
  margin-left: 0;
  position: relative;
  width: 100%;
  height: 520px;
  list-style : none;
  border-radius: 15px;
  background-color: ${theme.subColor};
`

const HeaderList =({page})=>{
  const [subMenu, setSubMenu] = useState([]);

  useEffect(()=>{
    setSubMenu(menuListData.MenuList.filter(data => data.id === page))
  }, [page])

  const printList=(data)=>{
    const result=[];
    for(let i=0;i<data.list.length;i++)
      result.push(<Li key={i}>{data.list[i]}</Li>);
    return result;
  }

  return (
    <Ul>
      {
        subMenu.map((data)=>(
          printList(data)
        ))
      }
    </Ul>
  );
}
export default HeaderList;