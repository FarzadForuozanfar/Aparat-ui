/**
 *
 * UserMenu
 *
 */

import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  function closeMenu() {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        aria-label="Account of current user"
        aria-controls="primary-account-menu"
        aria-haspopup="true"
        onClick={e => setAnchorEl(e.target)}
        color="inherit"
        size="small"
        style={{ marginRight: 15 }}
      >
        <AccountCircle fontSize="large" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id="primary-account-menu"
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={!!anchorEl}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>داشبرد</MenuItem>
        <MenuItem onClick={closeMenu}>ویدیوهای من</MenuItem>
        <MenuItem onClick={closeMenu}>دیدگاه ها</MenuItem>
        <MenuItem onClick={closeMenu}>کانال های دنبال شده</MenuItem>
        <MenuItem onClick={closeMenu}>آمار بازدید</MenuItem>
        <MenuItem onClick={closeMenu}>خروج ازحساب کاربری</MenuItem>
      </Menu>
    </>
  );
}

export default UserMenu;
