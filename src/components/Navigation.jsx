import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Motion from './motion/Motion.jsx'
import { Link } from 'react-router-dom'

const drawerWidth = 240;
const navItems = ['Home', 'About', 'References','Contact'];

const Navigation = (props) => {
  console.log('navbar props', props)
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: 'CalligraphyFont', }}>
        Ronja Kolho
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item} to={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Motion direction='down'>
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            </Motion>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', overflowX: 'hidden' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'rgba(248, 240, 229, 0.8)', backdropFilter: 'blur(200px)' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
          >
            <Motion direction='down'>
              <MenuIcon />
            </Motion>
          </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'flex'}, justifyContent: 'center', flexGrow: 1 }}>
            {navItems.map((item, index) => (
              <Link key={item} to={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }}>
                <Motion index={index} direction='down'>
                  <Button sx={{ color: 'black' }}>
                    {item}
                  </Button> 
                </Motion>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navigation;