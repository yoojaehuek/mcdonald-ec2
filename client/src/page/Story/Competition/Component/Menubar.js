import React from 'react';
import './Menubar.scss';
import BottomMenu from './BottomMenu';
import { NavLink, useLocation } from 'react-router-dom';

const MenuBar = () => {
  const location = useLocation();

  const pageData = {
    '/farmToRestaurant': {
      title: '맥도날드 품질 이야기',
      subtitle: '우리가 엄격해질수록 버거는 더 맛있어지니까! 모두의 노력으로 엄격하고 꼼꼼하게 키워진 신선한 식재료가 모여, 마침내 맛있는 맥도날드 버거가 됩니다.',
    },
    '/faq': {
      title: '맥도날드 경쟁력',
      subtitle: '맥도날드는 어떤 곳 보다 햄버거 비즈니스를 진지하게 생각합니다. 엄격한 품질 관리 시스템을 통해 고품질의 음식을 제공하며,조리 과정에서 고객이 궁금한 모든 것을 알려드립니다.',
    },
  };

  const currentPage = pageData[location.pathname] || { title: '기본', subtitle: '기본' };

  return (
    <>
      <div className="competition-menu-bar1">
        <div className="competition-title1">{currentPage.title}</div>
        <div className="competition-subtitle1">{currentPage.subtitle}</div>
        <ul className="competition-menu-list1">
          <NavLink to="/">
            <li>1</li>
          </NavLink>
          <NavLink to="/">
            <li>2</li>
          </NavLink>
          <NavLink to="/">
            <li>3</li>
          </NavLink>
        </ul>
      </div>
      <BottomMenu />
    </>
  );
};

export default MenuBar;
