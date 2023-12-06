import React from 'react';
// import { NavLink } from 'react-router-dom'
import Slider from "../components/Main/Slider";
import "./Main.scss";


const Main = () => {
  return(
    <div id='container'>
      <div className='content'>
        <div className='main-event'>
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default Main; 