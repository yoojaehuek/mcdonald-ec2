import React from 'react';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import "../Main/Button.scss";

const Buttonmain = () => {

  const handleScrollToTop = () => {
    scroll.scrollToTop(); // react-scroll의 함수를 사용해 맨 위로 스크롤
  };

return(
      <>
        <div className='aside'>
          <NavLink to="/your-first-link" className="nav-link-button">
            <button className="scroll-to-top-button2" />
          </NavLink>
          <NavLink to="/farmtorestaurant" className="nav-link-button">
            <button className="scroll-to-top-button3" />
          </NavLink>
          </div>
          <button className="scroll-to-top-button" onClick={handleScrollToTop}>
            맨 위로
          </button>
      </>
  );
}

export default Buttonmain;