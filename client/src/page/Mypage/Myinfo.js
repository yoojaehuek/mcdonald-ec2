
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Myinfo.scss";

const Myinfo = () => {

  return(
    <div className='container'>
      <div className='pagetop'>
        <div className='pagewarp'>
          <div className='pagename'>마이페이지</div>
          <div className='deptarar'>
            <NavLink to="/">홈</NavLink>
            <NavLink to="/">마이페이지 </NavLink>
            <NavLink to="/">개인정보수정</NavLink>
          </div>
        </div>
        <div className='slider_scroll'>
          <ul className='con'>
            <li><div>개인정보수정</div></li>
            <li><div>주문내역</div></li>
          </ul>
        </div>
      </div>
      <div className='wrapper'>
        <div className='con2'>
          <ul className='inputList'>
            <li>
              <div className='tit'><span>이름</span></div>
              <div className='box'><input type='text' value="임헌성" id='name' disabled='disabled'></input></div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Myinfo; 