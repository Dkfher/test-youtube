import React from "react";
import YouTube from "react-youtube";
import useResponsive from "../hooks/useResponsive";

const YouTubeVideo = ({ videoId }) => {
  const isMobile = useResponsive(768);

  const opts_mobile = {
    width: "345",
    height: "192",
  };

  const opts_desktop = {
    width: "672",
    height: "373",
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={isMobile ? opts_mobile : opts_desktop} />
    </div>
  );
};

export default YouTubeVideo;
