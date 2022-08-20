import cn from "classnames";
import React, { FC, ReactNode } from "react";
import { ButtonProps } from "./FormButton";

type EmergeButtonProps = ButtonProps & {
  outlined?: boolean;
  color?: string;
  children: ReactNode;
};

const EmergeButton: FC<EmergeButtonProps> = ({
  children,
  textColor,
  backgroundColor,
  outlined,
  color = "blue",
  borderColor,
  disabled,
  ...rest
}) => {
  const standardClass = `text-white hover:shadow-md bg-cLightBlue hover:bg-cDarkBlue`;
  const outlinedClass = `text-cLightBlue hover:text-white bg-opacity-100 hover:bg-opacity-1 hover:bg-cDarkBlue border-2 border-cLightBlue hover:border-white`;

  return (
    <button
      className={cn(
        [outlined ? outlinedClass : standardClass],
        "text-sm p-3 px-6 font-semibold rounded-md relative"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default EmergeButton;
