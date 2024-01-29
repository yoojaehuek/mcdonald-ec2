import React from 'react';
import { Outlet } from 'react-router-dom'
import Banner from '../components/Banner/Banner.js';


const Test = () => {  
  return(
    <>
      <Banner />
      <Outlet />
    </>
  )
}

export default Test; 