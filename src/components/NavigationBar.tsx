import React, { FC } from "react";

type NavBarLinkProps = { text: string; url: string };

const NavBarLink: FC<NavBarLinkProps> = ({ text, url }) => {
  return (
    <div className="font-bold text-cDarkBlue dark:text-cCream mx-4">{text}</div>
  );
};

const NavigationBar: FC = () => {
  return (
    <div className="flex h-16 items-center justify-between p-2 pt-4">
      <img
        src="logos/Cooperativ_Main Logo_Symbol_Yellow.png"
        className="h-14"
      />
      <div className="flex">
        <NavBarLink text="Bridge" url="/" />
        <NavBarLink text="Duplicate" url="/" />
      </div>
      {/* <button className="text-white bg-cYellow dark:bg-opacity-10 dark:border-2 dark:border-slate-200 font-semibold py-2 px-4 rounded-full">
        Connect Wallet
      </button> */}
    </div>
  );
};

export default NavigationBar;
