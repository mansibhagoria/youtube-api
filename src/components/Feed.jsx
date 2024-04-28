import React from "react";
import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { SideBar, Videos } from "./"; // coz we are in same folder
import { fetchFromAPI } from "../utils/fetchFromAPI";

// bg is black due to property of bgc given in app.js

const Feed = () => {
  const [SelectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // renders for the first time
    fetchFromAPI(`search?part=snippet&q=${SelectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [SelectedCategory]);

  // you can change the category of videos by using passing SelectedCategory to sidebar

  // our result depends upon the search staement

  // ie this one belongs to our dependency list

  // about style The code you provided seems to have flexDirection set to "column" for small screens (sx)/(sm), and "row" for medium screens (md).

  return (
    <Stack
      sx={{
        flexDirection: {
          // sm: "column",

          md: "row", // this is most important line
          // due to this , page becomes responsive and adapts to row after medium size
        },
      }}
    >
      {/* box 1 -> left sidebar */}
      <Box
        sx={{
          height: { sm: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          SelectedCategory={SelectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* use of typography :  */}
        <Typography
          className="copyrigh"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          © 2024 Google LLC
        </Typography>
        {/* Typography ->  */}
      </Box>

      {/* box 2 -> videos section */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {SelectedCategory}{" "}
          {/* this is supposed tobe the category of videos */}
          <span style={{ color: "#f31503" }}> Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
