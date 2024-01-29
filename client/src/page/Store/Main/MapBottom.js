import React from 'react';
import './MapBottom.scss';
import { NavLink } from 'react-router-dom';


const MapBotton = () => {
  return (
    <div className="botton_menu">
      <NavLink to='/store/find' className="btn_menu" activeClassName="active">
        지역별
      </NavLink>
      <NavLink to='/store/event' className="btn_menu" activeClassName="active">
        이벤트매장
      </NavLink>
    </div>
  )
}

export default MapBotton;