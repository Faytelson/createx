import React from "react";

export type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className, ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...rest}
    />
  );
};

export default Image;
