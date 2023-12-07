import React from 'react';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import "../../page/Main.scss";

const Buttonmain = () => {

  const handleScrollToTop = () => {
    scroll.scrollToTop(); // react-scroll의 함수를 사용해 맨 위로 스크롤
  };

return(
      <>
        <div className='aside'>
          <button className="scroll-to-top-button2">
            <NavLink to="/your-first-link" className="nav-link-button">
              첫 번째 링크
            </NavLink>
          </button>
          <button className="scroll-to-top-button3">
            <NavLink to="/your-second-link" className="nav-link-button">
              두 번째 링크
            </NavLink>
          </button>
          </div>
          <button className="scroll-to-top-button" onClick={handleScrollToTop}>
            맨 위로
          </button>
      </>
  );
}

export default Buttonmain;