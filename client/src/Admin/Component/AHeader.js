import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, IconButton, Button, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AHeader = () => {
  return (
    // <div style={{ position: 'fixed', width: '100%', backgroundColor: '#fff', zIndex: '3' }}>
    <div id='AHeader'>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
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
            <img
              src="/images/Header/logo1.png"
              alt="Logo"
              style={{ maxWidth: '102px', padding: '1vw', width: '100%', height: 'auto' }}
            />
          </Typography>
          <Button color="inherit" sx={{ color: '#000000' }}>
            Login
          </Button>
        </Toolbar>
        <Divider />
      </AppBar>
    </div>
  );
};

export default AHeader;
