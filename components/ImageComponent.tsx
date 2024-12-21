import React from "react";
import Image from "next/image"

type ImageProps = {
  image: string;
  alt: string;
};

const ImageComponent: React.FC<ImageProps> = ({ image, alt }) => {
  return (
    <div className="w-full h-full">

        <Image 
        src={image} 
        alt={alt}
        className="w-full h-full"
        width={460}
        height={280}
        />
      
    </div>
  );
};

export default ImageComponent;