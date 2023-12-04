import React from 'react';
import { NavLink } from 'react-router-dom'

const Main = () => {
  return(
    <>
      <h1>메인</h1>
      <NavLink to={'/test'}>test</NavLink>
    </>
  )
}

export default Main; 