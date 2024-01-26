import React from 'react';
import './Menubar.scss';
import { NavLink } from 'react-router-dom';


const BottomMenu = () => {
  return (
    <div className="bottom-menu">
      <NavLink to='/story/crew' className="menu-item" activeClassName="active">
        크루이야기
      </NavLink>
      <NavLink to='/story/work' className="menu-item" activeClassName="active">
        업무소개
      </NavLink>
      <NavLink to='/story/recruit' className="menu-item" activeClassName="active">
        인재채용
      </NavLink>
    </div>
  );
};

export default BottomMenu;


