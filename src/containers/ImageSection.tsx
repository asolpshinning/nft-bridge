import cn from "classnames";
import React, { FC } from "react";

type ImageSectionProps = {
  children: React.ReactNode;
};

const ImageSection: FC<ImageSectionProps> = ({ children }) => {
  return (
    <div className="min-h-max mb-6 md:rounded-3xl  bg-white  dark:bg-opacity-5 pt-5 pb-10 px-6 shadow-lg dark:shadow-lg">
      {children}
    </div>
  );
};

export default ImageSection;
