import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom'
import VisualBackGround from '../components/VisualBackGround/VisualBackGround';


const Test = () => {  
  return(
    <>
      <VisualBackGround />
      <Outlet />
    </>
  )
}

export default Test; 