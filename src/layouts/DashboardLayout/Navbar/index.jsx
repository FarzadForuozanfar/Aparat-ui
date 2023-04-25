import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar } from '@mui/material';
import UserMenu from './../UserMenu';
import NotificationMenu from './../NotificationMenu';
import AddVideoMenu from './../AddVideoMenu';

const StyledWrapper = styled.div`
  flexgrow: 1;

  & .MuiAppBar-root {
    background: #fff;
    box-shadow: 0 0 2px 1px #e4e0e0;
    color: #9a9a9a;
  }

  & .MuiSvgIcon-root {
    color: #9a9a9a;
  }

  & .MuiToolbar-root {
    justify-content: flex-end;
  }

  & .sectionDesktop {
    direction: ltr;
  }
`;

const Navbar = () => {
  return (
    <StyledWrapper>
      <AppBar position="static">
        <Toolbar variant="dense">
          <div className="sectionDesktop">
            <UserMenu />

            <NotificationMenu />

            <AddVideoMenu />
          </div>
        </Toolbar>
      </AppBar>
    </StyledWrapper>
  )
}

export default Navbar