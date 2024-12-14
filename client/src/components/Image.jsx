import React from "react";
import { IKImage } from 'imagekitio-react';

const Image = ({ src, className, w, h, alt }) => {
  return (
    <div>
      <IKImage
        urlEndpoint="https://ik.imagekit.io/BlogSite"
        path={src}
        className={className}
        loading='lazy'
        width={w}
        height={h}
        alt={alt}
      />
    </div>
  );
};

export default Image;
