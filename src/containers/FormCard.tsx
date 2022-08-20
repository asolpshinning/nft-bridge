import cn from "classnames";
import React, { FC } from "react";

type FormCardProps = {
  children: React.ReactNode;
  maxWidth?: boolean;
  center?: boolean;
};

const FormCard: FC<FormCardProps> = ({ children, maxWidth, center }) => {
  return (
    <div
      className={cn(
        center && "mx-auto",
        !maxWidth && "max-w-2xl"
        // small ? "pt-6 md:p-6" : "pt-8 p-4 md:p-8",
      )}
    >
      {children}
    </div>
  );
};

export default FormCard;
