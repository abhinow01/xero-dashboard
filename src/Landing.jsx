import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import XeroCodeeIcon from '@mui/icons-material/Code';

const drawerWidth = 240;

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const appBarStyle = {
    zIndex: 1201, // Value of theme.zIndex.drawer + 1
  };

  const drawerStyle = {
    width: drawerWidth,
    flexShrink: 0,
  };

  const drawerPaperStyle = {
    width: drawerWidth,
  };

  const contentStyle = {
    flexGrow: 1,
    padding: '24px',
  };

  return (
    <div style={{ display: 'flex' }}>
      <AppBar position="fixed" style={appBarStyle}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Your Logo Here
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          {/* Other icons */}
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          {/* Add more icons here */}
        </Toolbar>
      </AppBar>
      <Drawer
        style={drawerStyle}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: drawerPaperStyle,
        }}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </div>
        {/* Sidebar content */}
        <Typography variant="h6">XeroCodee</Typography>
        <Typography variant="h6">Builder Center</Typography>
        <Typography variant="h6">Clusters</Typography>
        <Typography variant="h6">Databases</Typography>
        <Typography variant="h6">Environment</Typography>
        <Typography variant="h6">Workflow</Typography>
        <Typography variant="h6">Monitoring</Typography>
        <Typography variant="h6">Security</Typography>
        <Typography variant="h6">Web Hooks</Typography>
        <Typography variant="h6">Log Error</Typography>
        {/* Add more sidebar items here */}
      </Drawer>
      <main style={contentStyle}>
        {/* Main content of the landing page */}
        {/* Add your content here */}
      </main>
    </div>
  );
};

export default LandingPage;
