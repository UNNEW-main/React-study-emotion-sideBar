import { useState} from 'react'
import styled from '@emotion/styled'
import theme from '../themes/theme';
import HeaderList from './HeaderList'

const Li = styled.li`
   margin-top: 5px;
   padding: 10px 0px;
   padding-left: 10px;
   ${props => props.isActive && `background-color: ${theme.subColor}; color: ${theme.subTextColor};`};
   border-top-left-radius: 15px;
   border-bottom-left-radius: 15px;
   &:hover{
      background-color: ${theme.subColor};
      color: ${theme.subTextColor};
   }
`

const Ul = styled.ul`
   padding: 0;
   position: relative;
   list-style : none;
   width: 220px;
   font-size: ${theme.fontSize};
`

const Section = styled.section`
   margin: 0px;
   padding:20px;
   padding-left: 30px;
   position: relative;
   width: 200px;
   height: 500px;
   justify-content: space-between;
   color: ${theme.mainTextColor};
   
   h1{
      font-size: 30px;
      margin-top: 10px;
   }
   h1, li{
      cursor: pointer;
   }
`
const MainDiv = styled.section`
   margin: 20px;
   padding: 0;
   display: flex;
   border-radius: 15px;
   width: 800px;
   border-color: red;
   background-color:  ${theme.mainColor};
`

const menuListId = {
   1: <HeaderList page="1"/>,
   2: <HeaderList page="2"/>,
   3: <HeaderList page="3"/>
}

const HeaderMenu = ()=>{
   const [activeMenuId, setActiveMenuTab] = useState(1);
   const [isActive, setIsActive] = useState(1);

   const handleMenuId=(id)=>{
      activeMenuId ===id ? setActiveMenuTab(id) : setActiveMenuTab(id);
      setIsActive(id);
   }

   return(
      <MainDiv>
         <Section>
            <h1 onClick={()=>handleMenuId(1)}>React Edu</h1>
            <Ul>
               <Li isActive={isActive===1 && true} onClick={()=>handleMenuId(1)}>Game</Li>
               <Li isActive={isActive===2 && true} onClick={()=>handleMenuId(2)}>Language</Li>
               <Li isActive={isActive===3 && true} onClick={()=>handleMenuId(3)}>Hobby</Li>
            </Ul>
         </Section>
         {menuListId[activeMenuId]}
      </MainDiv>
   );
}

export default HeaderMenu;