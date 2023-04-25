/**
 *
 * NotificationMenu
 *
 */

import React from 'react';
import { IconButton, Badge } from '@mui/material';
import { Notifications as NotificationsIcon } from '@mui/icons-material';

function NotificationMenu() {
  return (
    <IconButton
      aria-label="Show 17 new notifications"
      size="small"
      style={{ marginRight: 10 }}
    >
      <Badge badgeContent={7} variant="standard" color="primary" max={99} overlap="circular">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}

export default NotificationMenu;
