import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.scss";

const Footer = () => {
  return(
    <footer className='footer'>
      <div className='footerara'>
        <ul className='futil'>
          <li className='yellow'><NavLink to="/private">개인정보 처리방침</NavLink></li>
          <li><NavLink to="/location">위치정보 이용약관</NavLink></li>
          <li><NavLink to="/">사이트맵</NavLink></li>
          <li><NavLink to="/store/rental">임차문의</NavLink></li>
          <li><NavLink to="/">고객문의</NavLink></li>
          <li><NavLink to="/story/recruit">인재채용</NavLink></li>
          <li><a href="/admin/login">관리자 페이지</a></li>
        </ul>
        <ul className='fsans'>
          <li><NavLink to="/" className='fc'></NavLink></li>
          <li><NavLink to="/" className='in'></NavLink></li>
          <li><NavLink to="/" className="yu"></NavLink></li>
          <li><NavLink to="/" className="fa"></NavLink></li>
        </ul>
        <div className='finfo'>
          <ul className='info'>
            <li>한국 국제대학교 개발팀</li>
            <li>팀장: 김지환</li>
            <li>사업자 등록번호: 000-0000-0000</li>
            <li>전화주문: 0000-0000</li>
          </ul>
          <p>COPYRIGHT © 2019 ALL RIGHTS RESERVED BY KookJE.</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;