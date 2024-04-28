// entry point of react app

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material"; // box is similar to a div element
import React from "react";

import {
  SearchFeed,
  VideoDetail,
  Navbar,
  Feed,
  ChannelDetail,
} from "./components";

const App = () => (
  <>
    <BrowserRouter>
      <Box sx={{ bgcolor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </>
);

export default App;
