import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { Grid } from '@mui/material';

const StyledDashboardWrapper = styled.div`
  background: #fefefe;

  & .sidebarWrapper {
    z-index: 0;
  }

  & .uploadPageContainer {
    background-color: #fbfbfc;
    height: calc(100vh - 55px) !important;
  }
`;

const DashboardLayout = ({ children, showSidebar = true, uploadPage = false }) => {
  const classname = uploadPage ? 'uploadPageContainer' : '';

  return (
    <StyledDashboardWrapper>
      <Navbar />
      <Grid container>
        {showSidebar && (
          <>
            <Grid item xs={2} className="sidebarWrapper">
              <Sidebar />
            </Grid>
            <Grid xs={12} md={10} item>
              {children}
            </Grid>
          </>
        )}
        {!showSidebar && (
          <Grid xs={12} md={12} item className={classname}>
            {children}
          </Grid>
        )}
        {showSidebar && (
          <Grid xs={12} item className={classname}>
            {children}
          </Grid>
        )}
      </Grid>
    </StyledDashboardWrapper>
  );
};

export default DashboardLayout;