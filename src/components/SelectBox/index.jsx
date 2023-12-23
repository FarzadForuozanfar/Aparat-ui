import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormControl, TextField, MenuItem } from '@mui/material';

const Wrapper = styled.div`
  background: transparent;
  margin: 4.5px 0;

  & .formControl {
    background: white;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  & .MuiSelect-select {
    padding: 11px 15px;
  }
`;

function SelectBox({ id, className, options, onChange, ...props }) {
  console.log(props);
  return (
    <Wrapper>
      <FormControl variant="outlined" className={`formControl ${className}`}>
        <TextField
          select
          variant="outlined"
          {...props}
          inputProps={{ id }}
          onChange={(e, value) =>
            onChange(value.props.value, value.props.children)
          }
        >
          {Object.keys(options).map(key => (
            <MenuItem key={key} value={key}>
              {options[key]}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    </Wrapper>
  );
}

SelectBox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectBox.defaultProps = {
  className: '',
};

export default memo(SelectBox);
