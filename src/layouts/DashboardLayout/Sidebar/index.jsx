import React from "react";
import styled from "styled-components";
import { AiFillSetting } from "react-icons/ai";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  AccountCircle,
  Dashboard as DashboardIcon,
  Theaters as MovieIcon,
  ModeComment as CommentIcon,
  Subscriptions as FollowedChannelsIcon,
  PieChart as ChartIcon,
  PowerSettingsNew as LoguotIcon,
} from "@mui/icons-material";

const Wrapper = styled.div`
  width: 200px;
  background: #fff;
  box-shadow: -1px 2px 2px #eee;
  min-height: calc(100vh - 55px);

  & .channelSetting {
    background: #fff;
    display: block;
    text-align: center;
    margin-bottom: 10vh;
  }

  & .channelSetting .MuiSvgIcon-root,
  & .channelSetting .MuiListItemText-root {
    display: block;
    width: 100%;
    margin: auto;
    text-align: center;
  }

  & .channelSetting .MuiSvgIcon-root {
    font-size: 120px;
    width: 120px;
    color: #e5e5e5;
  }

  & .channelSetting svg {
    background: #fff;
    box-shadow: 0 0 2px 1px #e2dfdf;
    border-radius: 100%;
    padding: 0;
    display: block;
  }

  & .channelSetting .MuiTypography-root {
    font-weight: bold;
  }

  & .MuiSvgIcon-root,
  & .MuiListItemText-root {
    color: #6f7285;
  }

  & .MuiListItemText-root {
    font-size: 1rem;
  }

  & .MuiListItemIcon-root {
    min-width: 30px;
  }

  & .MuiListItemText-root {
    text-align: right;
  }

  & .settingIcon {
    position: absolute;
    left: 40px;
    top: 25px;
    border: 1px solid #e1e1e1 !important;
    cursor: pointer;
    transition: opacity 130ms ease;
  }

  & .settingIcon,
  & .settingIcon svg {
    font-size: 20px !important;
    width: 20px !important;
    color: #6f7285 !important;
    border:none !important;
    outline:none !important;
    box-shadow:none !important;
  }

  & .settingIcon:hover {
    opacity: 0.8;
  }

  & .logoutItem {
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 768px) {
    display: none !important;

  @media (max-height: 560px) {
    & .channelSetting {
      margin-bottom: 0vh;
    }
  }
`;

function Sidebar() {
  return (
    <Wrapper>
      <List component="nav">
        <ListItem className="channelSetting">
          <AiFillSetting className="settingIcon" />
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="نام کانال" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="داشبورد" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <MovieIcon />
          </ListItemIcon>
          <ListItemText primary="ویدیوهای من" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <CommentIcon />
          </ListItemIcon>
          <ListItemText primary="دیدگاه ها" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <FollowedChannelsIcon />
          </ListItemIcon>
          <ListItemText primary="کانال های دنبال شده" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ChartIcon />
          </ListItemIcon>
          <ListItemText primary="آمار بازدید" />
        </ListItem>
      </List>

      <ListItem className="logoutItem">
        <ListItemIcon>
          <LoguotIcon />
        </ListItemIcon>
        <ListItemText primary="خروج ازحساب کاربری" />
      </ListItem>
    </Wrapper>
  );
}

export default Sidebar;
