import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPre = styled.pre`
  border: 1px solid #aaa;
  background: #eee;
  color: #444;
  border-radius: 2px;
  display: block;
  direction: ltr;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  max-height: 150px;
  overflow: auto;
  font-weight: bold;
`;

function Dump({ data }) {
  return <StyledPre>{JSON.stringify(data, undefined, 2)}</StyledPre>;
}

Dump.propTypes = {
  data: PropTypes.any.isRequired,
};

export default memo(Dump);