import React from "react";
import { Stack } from "@mui/material";
import { categories, colors } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { md: "column" },
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        width: { sx: "auto", md: "15vh" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && colors.skyBlue,
            color:
              category.name === selectedCategory
                ? colors.white
                : colors.darkSilver,
          }}
          key={category.name}
        >
          <span
            style={{
              color:
                category.name === selectedCategory
                  ? colors.white
                  : colors.darkSilver,
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
