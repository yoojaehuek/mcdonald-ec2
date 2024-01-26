import React from 'react';
import './Menubar.scss';
import BottomMenu from './BottomMenu';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {
  return (
    <>
      <div className="people-menu-bar">
        <div className="people-title">맥도날드 사람들</div>
        <div className="people-subtitle">
          끊임없는 변화와 도전을 통해 성장해온 맥도날드<br/>
          이 변화의 중심에는 맥도날드와 함께 변화하며 성장하는 ‘맥도날드 사람들’이 있습니다.
        </div>
        <ul className="people-menu-list">
          <NavLink to='/'><li>Home</li></NavLink>
          <NavLink to='/'><li>Story</li></NavLink>
          <NavLink to='/crew'><li>맥도날드 사람들</li></NavLink>
        </ul>
      </div>
      <BottomMenu/>
    </>
  );
};

export default MenuBar;
