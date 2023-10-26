import React, { useState, useRef } from "react";

interface ImageZoomProps {
  src: string;
  alt: string;
  zoomFactor?: number;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt, zoomFactor = 3 }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const boundingRect = containerRef.current.getBoundingClientRect();
      const xOffset = e.clientX - boundingRect.left;
      const yOffset = e.clientY - boundingRect.top;

      setCursorPosition({ x: xOffset, y: yOffset });
    }
  };

  return (
    <div
      className="relative inline-block"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className="object-cover object-center rounded-[0px] w-[650px] h-[600px]"
      />
      {isZoomed && (
        <div
          className="absolute w-[500px] h-[500px] border-2 border-gray-300 shadow-md z-10"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `-${cursorPosition.x * zoomFactor}px -${
              cursorPosition.y * zoomFactor
            }px`,
            backgroundSize: `${100 * zoomFactor}%`,
            left: cursorPosition.x,
            top: cursorPosition.y,
          }}
        />
      )}
    </div>
  );
};

export default ImageZoom;
