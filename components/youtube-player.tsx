// components/YouTubePlayer.tsx
import React from "react";

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  // Width and height for medium-sized screens (md)
  const widthMd = 350;
  const heightMd = (9 / 16) * widthMd; // Assuming 16:9 aspect ratio

  // Width and height for extra-large screens (xl)
  const widthXl = 700;
  const heightXl = (9 / 16) * widthXl; // Assuming 16:9 aspect ratio

  return (
    <div className="w-[350px] md:w-[700px] relative">
      <div
        className="aspect-w-16 aspect-h-9"
        style={{ paddingBottom: "56.25%" }} // Assuming 16:9 aspect ratio
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubePlayer;
