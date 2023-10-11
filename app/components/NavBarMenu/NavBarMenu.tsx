import React from "react";
import NavBarLink from "../NavBarLink/NavBarLink";
import { NavBarMenuType } from "./NavBarMenu.types";
import classNames from "classnames";

const NavBarMenu = ({ links, extraClasses }: NavBarMenuType) => {
  let menuClasses = classNames("flex items-center h-10 gap-4 px-5");
  return (
    <ul className={`${menuClasses} ${extraClasses ?? ""}`}>
      {links.map((link, index) => (
        <NavBarLink
          key={index}
          text={link.text}
          url={link.url}
          sublinks={link.sublinks}
        />
      ))}
    </ul>
  );
};

export default NavBarMenu;
