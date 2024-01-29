import React from 'react';
import { NavLink } from 'react-router-dom';

export function Fail() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    textAlign: 'center',
  };

  const headingStyle = {
    color: '#333',
  };

  const paragraphStyle = {
    color: '#777',
    marginTop: '10px',
    marginBottom: '10px',
  };

  const linkStyle = {
    marginTop: '20px',
    textDecoration: 'none',
    color: '#3498db',
    fontWeight: 'bold',
    fontSize: '18px',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>결제 실패 페이지</h1>
      <p style={paragraphStyle}>
        결제가 실패했습니다.<br />
        다시 시도해주세요.
      </p>
      <NavLink to='/' style={linkStyle} activeStyle={linkHoverStyle}>
        메인
      </NavLink>
    </div>
  );
}

export default Fail;
