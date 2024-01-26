import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Success() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{
      marginTop: '5vw',
      // background: `url("../images/new.jpg") no-repeat center`,
      backgroundSize: 'contain',
      height: '40vw',
      maxWidth: '80vw',
      margin: '0 auto',
      padding: '20px',
      border: '2px solid #fff',
      borderRadius: '10px',
      overflow: 'hidden',
    }}>
      <div style={{ textAlign: 'center', color: 'rgb(255, 188, 13)' }}>
        <h1 style={headerStyle}>결제 성공 페이지</h1>
        <p style={paragraphStyle}>결제가 성공적으로 처리되었습니다.</p>
        <NavLink
          to='/'
          style={navLinkStyle(isHovered)}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          메인
        </NavLink>
      </div>
    </div>
  );
}

const headerStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
  marginBottom: '1em',
};

const paragraphStyle = {
  fontSize: '1.2em',
  marginBottom: '2em',
};

const navLinkStyle = (isHovered) => ({
  display: 'inline-block',
  marginTop: '10px',
  padding: '10px 20px',
  fontSize: '1em',
  color: 'black',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  backgroundColor: isHovered ? '#FFD700' : 'transparent',
  transition: 'background-color 0.3s ease',
});

export default Success;
