import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import SideBar from "./SideBar";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

import { colors } from "../utils/constants";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Toán");
  const [videos, setVideos] = useState([]);
  // console.log(selectedCategory);
  useEffect(() => {
    setVideos([]);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* Box for Sidebar */}
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          width: { sx: "auto", md: "15vh" },
          backgroundColor: colors.darkerWhite,
        }}
      >
        {/* Creating Sidebar */}
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      {/* Box for Videos */}
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          flex: "auto",
          height: "90vh",
          backgroundColor: colors.darkerWhite,
        }}
        margin="auto"
      >
        <Typography
          varient="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: colors.white }}
        >
          <span style={{ color: colors.skyBlue }}>
            {selectedCategory}{" "}
            <span
              style={{
                color: colors.black,
              }}
            >
              Videos
            </span>
          </span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
