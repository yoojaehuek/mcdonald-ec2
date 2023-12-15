import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, IconButton, Button, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AHeader = () => {
  return (
    <>
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
            로고
          </Typography>
          <Button color="inherit" sx={{ color: '#000000' }}>Login</Button>
        </Toolbar>
        <Divider />
      </AppBar>
    </>
  );
};

export default AHeader;
