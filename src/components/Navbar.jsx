import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { colors, navbarCategories } from "../utils/constants";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Trang chủ");

  const handleNavbarCategoryClick = (name) => {
    setSelectedCategory(name);
  };

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
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          position: "sticky",
          top: 0,
          justifyContent: "space-between",
        }}
        p={-1}
      >
        {navbarCategories.map((category) => (
          <button
            className="navbar_category_btn"
            onClick={() => handleNavbarCategoryClick(category.name)}
            style={{
              background: category.name === selectedCategory && colors.darkBlue,
            }}
            key={category.name}
          >
            <span
              className="navbar_title"
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
                color: colors.white,
              }}
            >
              {category.name}
            </span>
          </button>
        ))}
      </Stack>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
