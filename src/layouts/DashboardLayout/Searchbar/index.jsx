/**
 *
 * SearchBar
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';

const StyledWrapper = styled.div`
  border-radius: 35px;
  background: #f6f6f6;
  color: #6f7285;
  min-width: 150px;
  padding: 4px;
  position: relative;
  transition: all 500ms ease;
  max-width: 600px;
  margin: auto;

  &:hover,
  &.active {
    box-shadow: 0 0 2px 1px #e4e0e0;
    background: #fff;
  }

  & > input {
    border: none;
    outline: none;
    width: 100%;
    padding: 8px;
    padding-left: 45px;
    background: transparent;
    color: inherit;
  }

  & .clearIcon {
    position: absolute;
    left: 33px;
    top: 9px;
    font-size: 20px;
    cursor: pointer;
    color: #6f7285 !important;
  }

  & button {
    position: absolute;
    left: 5px;
    top: 4px;
  }

  & button:hover .MuiSvgIcon-root,
  & .clearIcon:hover {
    color: #05a3e8 !important;
    background-color: none !important;
  }

  & .clearIcon:hover{
    color: #df0f50 !important;
  }
`;

function SearchBar() {
  const [active, setActive] = useState(false);
  const [searchText, setsearchText] = useState('');

  return (
    <StyledWrapper className={active ? 'active' : ''}>
      <input
        type="text"
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        onChange={e => setsearchText(e.target.value.trim())}
        value={searchText}
        maxLength={70}
        placeholder="جستجوی ویدیو ها و کانال ها..."
      />

      {searchText && (
        <ClearIcon className="clearIcon" onClick={() => setsearchText('')} />
      )}

      <IconButton size="small">
        <SearchIcon />
      </IconButton>
    </StyledWrapper>
  );
}

SearchBar.propTypes = {};

export default memo(SearchBar);
