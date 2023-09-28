import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import { FooterMenuType } from "./FooterMenu.types";
import classNames from "classnames";
import Heading from "../Heading/Heading";

const FooterMenu = ({ links, extraClasses, title }: FooterMenuType) => {
  let menuClasses = classNames("flex flex-col gap-2");
  return (
    <div>
      <Heading
        variant="20"
        text={title}
        extraClasses="text-white font-bold pb-3"
      />
      <ul className={`${menuClasses} ${extraClasses ?? ""}`}>
        {links.map((link, index) => (
          <FooterLink key={index} text={link.text} url={link.url} />
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
