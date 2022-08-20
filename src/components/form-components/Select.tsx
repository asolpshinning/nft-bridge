import cn from "classnames";
import React, { ReactNode } from "react";
import { ErrorMessage, Field } from "formik";

export interface SelectProps {
  id?: any;
  name: string;
  children: ReactNode;
  required?: boolean;
  multiple?: boolean;
  disabled?: boolean;
}
export interface CustomSelectProps extends SelectProps {
  labelText?: string;
  className: string;
  fieldClass?: string;
  fieldLabelClass?: string;
}

const Select: React.FC<CustomSelectProps> = ({
  labelText,
  id,
  name,
  required,
  multiple,
  className,
  fieldClass,
  disabled,
  fieldLabelClass,
  children,
}) => {
  return (
    <div className={cn(className, "flex flex-col")}>
      {labelText && (
        <label
          htmlFor={name}
          className={cn(
            fieldLabelClass
              ? fieldLabelClass
              : "text-sm text-blue-900 dark:text-slate-200 font-semibold text-opacity-80 "
          )}
        >
          {labelText}
          {required ? " *" : ""}
        </label>
      )}
      <Field
        as="select"
        id={id}
        disabled={disabled}
        name={name}
        multiple={multiple}
        required={required}
        className={cn(
          fieldClass
            ? fieldClass
            : "text-sm dark:text-slate-300 bg-opacity-0 dark:bg-white dark:bg-opacity-10 my-1 p-3 border-2 border-gray-200 dark:border-0 shadow-inner  rounded-md focus:border-blue-900 focus:outline-none"
        )}
      >
        {children}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-500"
      />
    </div>
  );
};

export default Select;
