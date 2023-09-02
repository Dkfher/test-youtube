import React from "react";
import YouTubeVideo from "../YouTubeVideo";

const VideoPage = () => {
  // ejemplo link https://www.youtube.com/watch?v=YPzl_DZqzFA
  const videoId = "YPzl_DZqzFA"; // Reemplaza esto con el ID de tu video de YouTube

  return (
    <div>
      <h1>Video de YouTube</h1>
      <YouTubeVideo videoId={videoId} />
    </div>
  );
};

export default VideoPage;
