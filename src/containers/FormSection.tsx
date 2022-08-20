import cn from "classnames";
import React, { FC } from "react";

type FormSectionProps = {
  children: React.ReactNode;
};

const FormSection: FC<FormSectionProps> = ({ children }) => {
  return (
    <div className="min-h-max mb-6 md:rounded-3xl  bg-blue-50  dark:bg-opacity-5 pt-5 pb-10 px-6 shadow-innerFormSection dark:shadow-innerFormSectionDark">
      {children}
    </div>
  );
};

export default FormSection;
