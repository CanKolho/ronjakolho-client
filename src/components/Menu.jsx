import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        Galleries
      </Button>
      <Menu
  id="basic-menu"
  anchorEl={anchorEl}
  open={open}
  onClose={handleMouseLeave}
  MenuListProps={{
    'aria-labelledby': 'basic-button',
  }}
  sx={{ textAlign: 'center' }} // Add your styles here
>
  <MenuItem onClick={handleMouseLeave} sx={{ textAlign: 'center' }}>Wedding</MenuItem>
  <MenuItem onClick={handleMouseLeave} sx={{ textAlign: 'center' }}>Babies</MenuItem>
  <MenuItem onClick={handleMouseLeave} sx={{ textAlign: 'center' }}>Nature</MenuItem>
</Menu>
    </div>
  );
}
