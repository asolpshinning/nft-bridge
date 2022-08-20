import cn from "classnames";
import React from "react";
import { ErrorMessage, Field } from "formik";

export const defaultFieldLabelClass =
  "text-sm text-blue-900 dark:text-slate-200 font-semibold text-opacity-80";
export const defaultFieldDiv = "bg-opacity-0";
export const addressFieldDiv = "pt-2 my-2 bg-opacity-0";
export const selectFieldClass =
  "text-lg font-semibold text-slate-100 dark:text-slate-300 border-2 bg-sky-800 border-sky-800 dark:bg-white dark:bg-opacity-10 my-1 p-3 pl-5 w-64 rounded-full shadow-xl focus:border-blue-900 focus:outline-none";
export const inputFieldClass =
  "text-lg font-semibold text-slate-800 dark:text-slate-300 border-2 bg-sky-50 border-sky-800 dark:bg-white dark:bg-opacity-10 my-1 p-3 pl-5 rounded-full shadow-inner focus:border-blue-900 focus:outline-none ";
export const nonInputFieldClass =
  "text-lg font-semibold text-slate-800 dark:text-slate-300 border-2 bg-sky-100 border-sky-800 dark:bg-white dark:bg-opacity-10 my-1 p-3 pl-5 rounded-full shadow-inner focus:border-blue-900 focus:outline-none ";

export interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  onBlur?: any;
  value?: string | number | boolean;
}

export interface CustomInputProps extends InputProps {
  labelText?: string;
  className?: string;
  fieldClass?: string;
  fieldLabelClass?: string;
  fieldHeight?: string;
  textArea?: boolean;
}

export const Input: React.FC<CustomInputProps> = ({
  labelText,
  name,
  type,
  textArea,
  placeholder,
  required,
  className,
  fieldClass,
  fieldHeight,
  fieldLabelClass,
  onBlur,
}) => {
  return (
    <div className={cn(className, "flex flex-col w-full")}>
      {labelText && (
        <label
          htmlFor={name}
          className={cn(
            fieldLabelClass ? fieldLabelClass : defaultFieldLabelClass
          )}
        >
          {labelText}
          {required ? " *" : ""}
        </label>
      )}
      <Field
        as={textArea && "textarea"}
        name={name}
        type={type}
        placeholder={placeholder}
        className={cn(
          fieldClass
            ? fieldClass
            : "text-sm dark:text-slate-300  bg-opacity-0 dark:bg-white dark:bg-opacity-10 my-1 p-3 border-2 border-gray-200 dark:border-0 shadow-inner rounded-md focus:border-blue-900 focus:outline-none",
          fieldHeight
        )}
        required={required}
        onBlur={onBlur}
        onWheel={(e: any) => type === "number" && e.target.blur()}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-500"
      />
    </div>
  );
};

export default Input;
