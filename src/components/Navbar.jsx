import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { colors } from "../utils/constants";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={1}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        background: colors.skyBlue,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height="50" />
        <a className="title">GIA SƯ TÀI NĂNG</a>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
