/**
 *
 * UserMenu
 *
 */

import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import langData from '../../../lang/Dashboard/lang-fa.json';
import styled from 'styled-components';
import { 
  AccountCircle,
  Settings as SettingsIcon,
  Dashboard as DashboardIcon,
  Theaters as MovieIcon,
  ModeComment as CommentIcon,
  Subscriptions as FollowedChannelsIcon,
  PieChart as ChartIcon,
  PowerSettingsNew as LoguotIcon, } from '@mui/icons-material';
const StyledMenu = styled(Menu)`
  margin-top: 33px;

  & .MuiSvgIcon-root {
    color: #999;
  }

  & ul {
    padding-top: 0;
  }

  & li {
    padding: 0 16px;
    margin: 0;
    min-height: 40px;
    min-width: 250px;
    font-size:smaller;
  }

  & .channelMenu {
    min-height: 50px;
    background: #f4f4f4;
    display: flex;
    align-items: center;
    text-align: right;
    padding: 5px 10px;
    font-size: 0.8rem;
  }

  & .channelMenu:hover {
    background: #f4f4f4;
  }

  & .channelMenu .channelUserIcon {
    margin-top: 5px;
    color: #999;
    font-size: 3rem;
  }

  & .channelMenu .channelUserIcon:hover{
    border-radius: 50%;
    padding: 0px;
    box-shadow: #fefefefe 0px 0px 20px 1px inset;
  }
  & .channelMenu .channelTitle {
    display: block;
    margin-bottom: 6px;
    margin-right:1.5px;
  }

  & .channelMenu .channelSetting {
    display: block;
    font-size: 0.6rem;
    color: #888;
  }

  & .channelMenu .channelSetting .MuiSvgIcon-root {
    font-size: 0.8rem;
    margin-top: 1px;
    float: right;
    margin-left: 3px;
  }
`;

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

      <StyledMenu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id="primary-account-menu"
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={!!anchorEl}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu} className="channelMenu">
          <AccountCircle fontSize="large" className="channelUserIcon" />
          <div style={{marginRight:'6px'}}>
            <b className="channelTitle">عنوان کانال</b>
            <div className="channelSetting">
              <SettingsIcon />
              {langData.channelSetting}
            </div>
          </div>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <DashboardIcon />
          <span style={{marginRight:"5px"}} >{langData.dashboard}</span>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <MovieIcon />
          <span style={{marginRight:"5px"}} >{langData.myVideos}</span>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <CommentIcon />
          <span style={{marginRight:"5px"}} >{langData.comments}</span>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <FollowedChannelsIcon />
          <span style={{marginRight:"5px"}} >{langData.channelFollowings}</span>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <ChartIcon />
          <span style={{marginRight:"5px"}} >{langData.statictis}</span>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <LoguotIcon />
          <span style={{marginRight:"5px"}} >{langData.logOut}</span>
        </MenuItem>
        </StyledMenu>
    </>
  );
}

export default UserMenu;
