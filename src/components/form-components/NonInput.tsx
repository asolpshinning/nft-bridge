import cn from "classnames";
import React, { ReactChild } from "react";
import { defaultFieldLabelClass } from "./Inputs";

export type CustomNonInputProps = {
  labelText?: string;
  fieldLabelClass?: string;
  fieldClass?: string;
  className?: string;
  children: ReactChild;
};

export const NonInput: React.FC<CustomNonInputProps> = ({
  labelText,
  fieldLabelClass,
  fieldClass,
  className,
  children,
}) => {
  return (
    <div className={cn(className, "flex flex-col w-full")}>
      {labelText && (
        <label
          className={cn(
            fieldLabelClass ? fieldLabelClass : defaultFieldLabelClass
          )}
        >
          {labelText}
        </label>
      )}
      <div
        className={cn(
          fieldClass
            ? fieldClass
            : "mt-1 rounded-md bg-slate-50 border-2 border-gray-200 h-12 p-2 pl-3 flex items-center"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default NonInput;
