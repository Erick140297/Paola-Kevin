import React from "react";

const PhotoGridConfig = ({ images }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
        >
          <img src={image} alt={`Photo ${index}`} className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGridConfig;
