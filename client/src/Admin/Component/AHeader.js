import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, IconButton, Button, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getCookie, removeCookie } from '../../utils/cookie';
import { API_URL } from '../../config/contansts';

const AHeader = () => {

  const onLogout = () => {
    console.log('실행');
    removeCookie('login');
    // navigate('/admin/login');
    window.location.replace('/app1/admin/login');
  }
  return (
    // <div style={{ position: 'fixed', width: '100%', backgroundColor: '#fff', zIndex: '3' }}>
    <div id='AHeader'>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none', borderBottom: '1px solid rgb(255, 188, 13)' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: '#000000' }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#000000' }}>
            <NavLink to='/admin'><img
              src={API_URL+'/images/Header/logo1.png'}
              alt="Logo"
              style={{ maxWidth: '102px', padding: '1vw', width: '100%', height: 'auto' }}
            /></NavLink>
          </Typography>
          { !getCookie('login') ? 
            <Button color="inherit" sx={{ color: '#000000' }}>
              Login
            </Button>
            :
            <Button onClick={onLogout} color="inherit" sx={{ color: '#000000' }}>
              Logout
            </Button>
          }
        </Toolbar>
        <Divider />
      </AppBar>
    </div>
  );
};

export default AHeader;
