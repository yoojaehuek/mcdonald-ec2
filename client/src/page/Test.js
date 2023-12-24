import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom'
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