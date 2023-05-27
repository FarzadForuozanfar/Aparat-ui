/**
 *
 * AddVideoMenu
 *
 */

import React from "react";
import { IconButton } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

function AddVideoMenu() {
  return (
    <Link to={"/upload"}>
      <IconButton color="inherit" size="small">
        <AddIcon />
      </IconButton>
    </Link>
  );
}

export default AddVideoMenu;
