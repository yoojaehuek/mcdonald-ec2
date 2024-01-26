import React from 'react';
import './Menubar.scss';
import { NavLink } from 'react-router-dom';

const BottomMenu = () => {
  return (
    <div className="competition-menu1">
      <NavLink to="/story/farmtorestaurant" className="competition-item1" activeClassName="active">
        농장에서 레스토랑까지
      </NavLink>
      <NavLink to="/story/faq" className="competition-item1" activeClassName="active">
        궁금한 모든 것을 알려드립니다
      </NavLink>
    </div>
  );
};

export default BottomMenu;
