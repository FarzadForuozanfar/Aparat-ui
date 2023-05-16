import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 180px;
  background: #fff;
  box-shadow: -1px 2px 2px #eee;
  min-height: 100vh;
`;

function Sidebar() {
  return (
    <Wrapper>
      Sidebar
      <br />
      panel
    </Wrapper>
  );
}

export default Sidebar;