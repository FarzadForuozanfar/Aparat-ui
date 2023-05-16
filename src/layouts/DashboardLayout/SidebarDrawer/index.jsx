import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { HiMenu } from 'react-icons/hi';
import logoImageName from '../../../assets/images/logo-name.svg';
import { List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import styled from 'styled-components';

import "./style.css";

const StyledDrawer = styled.div`
  min-width: 180px;
  padding: 0 15px;

  .marginFromSide {
    margin-right: 15px;
  }

  ul.MuiList-root {
    border-bottom: 1px solid #e5e5e5;
    min-width: 150px;
  }

  .topLogoItem {
    margin-bottom: 15px;
    padding: 4px 0;
  }

  .MuiListItemIcon-root {
    min-width: 32px;
    color: #6f7285;
  }

  .MuiListItemText-root {
    text-align: right;
    color: #6f7285;
  }

  .MuiListItem-button {
    padding: 5px;
    border-radius: 8px;
    transition: background-color 350ms ease;
  }

  .MuiListItem-button:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const SidebarDrawer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoStyle = {
    width: "30px",
    height: "30px",
  };
  const logoNameStyle = {
    width: "45px",
    height: "45px",
  };
  const ListItemTextStyle = {
    textAlign: "right"
  }
  return (
    <div>
      <HiMenu className="menuIcon" onClick={() => setIsMenuOpen(true)}/>
      <StyledDrawer
        id="mySidenav"
        className={`sidenav ${isMenuOpen ? "open" : "close"}`}
      >
        <div className="sidebar-logo-container">
          <HiMenu onClick={() => setIsMenuOpen(false)} className="closebtn" />
          <img style={logoStyle} src={Logo} alt="aparat" />
          <img style={logoNameStyle} src={logoImageName} alt="aparat" />
        </div>

        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText style={ListItemTextStyle} primary="خانه" />
          </ListItem>
        </List>
      </StyledDrawer>
    </div>
  );
};

export default SidebarDrawer;
