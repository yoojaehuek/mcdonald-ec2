import { useState } from 'react';
import styled from 'styled-components';

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  margin-top: 10px;
  
  .submenu{
    display: flex;
    // jsutify-content: space-between;
    // width: 380px;
    // height: 30px;
    width: calc(100% /5);
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
  }
  .focused{
    background-color: rgb(255, 255, 255);
    color: rgb(21, 20, 20);
  }
  & div.desc{
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export const Tab = () => {
  const [currentTab, clickTab] = useState(0);

  const menuArr= [
    { name: 'Tab1', content: '전국 레스토랑에\n친환경 고효율 LED 설치'},
    { name: 'Tab2', content: 'Tab menu TWO'},
    { name: 'Tab3', content: 'Tab menu THREE'},
    { name: 'Tab4', content: 'Tab menu FOUR'},
    { name: 'Tab5', content: 'Tab menu FIVE'},
  ];

  const selectMenuHandler = (index) => {
    clickTab(index);
  };

  return(
    <>
      <div className="Tabinput">
        <TabMenu>
          {menuArr.map((el, index) => (
            <li className={index === currentTab ? "submenu focused" : "submenu" }
            onClick={() => selectMenuHandler(index)}>{el.name}</li>
          ))}
        </TabMenu>
        <Desc>
          <li>            
            <span>{menuArr[currentTab].content}</span>
          </li>          
        </Desc>
      </div>
    </>
  )
}

export default Tab;