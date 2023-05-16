import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Grid } from "@mui/material";
import UserMenu from "./../UserMenu";
import NotificationMenu from "./../NotificationMenu";
import AddVideoMenu from "./../AddVideoMenu";
import SearchBar from "./../Searchbar";
import SidebarDrawer from '../SidebarDrawer'

const StyledWrapper = styled.div`
  flexgrow: 1;
  color: #6f7285;
  position: relative;
  z-index: 1;

  & .MuiAppBar-root {
    background: #fff;
    box-shadow: 0 0 2px 1px #e4e0e0;
    color: #6f7285;
    min-height: 100px;
    padding-top:5px;
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

  & .sectionDesktop .MuiSvgIcon-root {
    color: #6f7285;
  }

  & .leftItems,
  & .rightItems {
    max-width: auto;
  }

  & .leftItems{
    display: flex;
    align-items: center;
  }

  & .searchBarWrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 34px;
  }

  @media (min-width: 600px) {
    & .searchBarWrapper {
      position: inherit;
    }

    & .MuiAppBar-root {
      min-height: auto;
    }

    & .leftItems,
    & .rightItems {
      max-width: 162px;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledWrapper>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container spacing={2}>
            <Grid item xs className="leftItems">
              <SidebarDrawer/>
            </Grid>
            <Grid  item xs className="searchBarWrapper">
              <SearchBar />
            </Grid>
            <Grid  item xs className="rightItems">
              <div className="sectionDesktop">
                <UserMenu />

                <NotificationMenu />

                <AddVideoMenu />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </StyledWrapper>
  );
};

export default Navbar;
