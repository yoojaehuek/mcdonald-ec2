import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
  const [isDepth1Open, setDepth1Open] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className={`header ${isDepth1Open ? 'open' : ''}`} style={{ marginTop: '0px' }}>
      <div className= "headAra">
        <strong className='mlogo'>
          <NavLink to="/">
            <img src='/images/Header/logo1.png' alt='로고' />
          </NavLink>
        </strong>
        <nav className='hmenu'>
          <div className='menu'>
            
            <ul
              className="depth1"
              onMouseEnter={() => setDepth1Open(true)}
              onMouseLeave={() => setDepth1Open(false)}
            >
              <li>
                <NavLink to="/" className={`dth1 ${isDepth1Open ? 'on' : ''}`}>
                  Menu
                </NavLink>
                <ul className='depth2'>
                  <li><NavLink to="/">버거</NavLink></li>
                  <li><NavLink to="/">맥런치</NavLink></li>
                  <li><NavLink to="/">맥모닝</NavLink></li>
                  <li><NavLink to="/">해피스낵</NavLink></li>
                  <li><NavLink to="/">사이드&디저트</NavLink></li>
                  <li><NavLink to="/">맥카페&음료</NavLink></li>
                  <li><NavLink to="/">해피밀</NavLink></li>
                </ul>
              </li>
              <li>
                <NavLink to="/" className={`dth1 ${isDepth1Open ? 'on' : ''}`}>
                  Store
                </NavLink>
                <ul className='depth2'>
                  <li><NavLink to="/find">매장찾기</NavLink></li>
                  <li><NavLink to="/">맥딜리버리</NavLink></li>
                  <li><NavLink to="/">맥드라이브</NavLink></li>
                  <li><NavLink to="/">임차문의</NavLink></li>
                </ul>
              </li>
              <li>
                <NavLink to="/promotion" className={`dth1 ${isDepth1Open ? 'on' : ''}`}>
                  What's New
                </NavLink>
                <ul className='depth2'>
                  <li><NavLink to="/promotion">프로모션</NavLink></li>
                  <li><NavLink to="/">새로운 소식</NavLink></li>
                  <li><NavLink to="/happymeal">이달의 해피밀</NavLink></li>
                </ul>
              </li>
              <li>
                <NavLink to="/" className={`dth1 ${isDepth1Open ? 'on' : ''}`}>
                  Story
                </NavLink>
                <ul className='depth2'>
                  <li><NavLink to="/brandintro">브랜드 소개</NavLink></li>
                  <li><NavLink to="/">사회적 책임과 지원</NavLink></li>
                  <li><NavLink to="/farmtorestaurant">맥도날드 품질 이야기</NavLink></li>
                  <li><NavLink to="/crew">맥도날드 사람들</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='util'>
            <NavLink to="/login" className="renter" >로그인</NavLink>
            <NavLink to="/" className="renter2">회원가입</NavLink>
            <NavLink to="/" className="renter3">인재채용</NavLink>
            <div className='topserch'>
              <button className='serch'onClick={openModal}></button>
            </div>
          </div>
        </nav>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
            <input type="text" placeholder="매장 또는 매뉴정보를 검색하실 수 있습니다." />
            <button className="search-button">검색하기</button>
            <button className='close-button' onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;
