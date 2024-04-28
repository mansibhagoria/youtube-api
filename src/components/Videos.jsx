import { Stack, Box } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./";

// direction is sent by prop drilling to help to arrange the configuration ...
const Videos = ({ videos, direction }) => {
  // row -> means vertical
  if (!videos?.length) return "loading";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
