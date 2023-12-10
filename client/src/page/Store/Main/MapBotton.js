import React, { useState } from 'react';
import './Menubar.scss';
import { NavLink } from 'react-router-dom';


const MapBotton = () => {
  return (
    <div className="botton_menu">
      <NavLink to='/find' className="btn_menu" activeClassName="active">
        지역별
      </NavLink>
      <NavLink to='/event' className="btn_menu" activeClassName="active">
        이벤트매장
      </NavLink>
    </div>
  )
}

export default MapBotton;