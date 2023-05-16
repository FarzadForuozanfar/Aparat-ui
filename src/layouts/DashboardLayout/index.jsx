import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { Grid } from '@mui/material';

const StyledDashboardWrapper = styled.div`
  background: #fefefe;

  & .sidebarWrapper {
    min-height: 100vh;
    z-index: 0;
  }
`;

const DashboardLayout = ({ children }) => {
  return (
    <StyledDashboardWrapper>
      <Navbar />
      <Grid container >
        <Grid item className="sidebarWrapper">
          <Sidebar />
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </StyledDashboardWrapper>
  )
}

export default DashboardLayout