import React from "react";
import FooterMenu from "../FooterMenu/FooterMenu";
import Link from "next/link";
import { FooterType } from "./Footer.types";
import Image from "next/image";
import classNames from "classnames";

const Footer = ({ logo, menus, extraClasses }: FooterType) => {
  let footerClasses = classNames(
    "flex justify-around py-20 px-[260px] h-80 bg-darkBlue w-full"
  );
  return (
    <footer className={`${footerClasses} ${extraClasses ?? ""}`}>
      <Link href={logo.url} className="inline-block h-24 w-32">
        <Image src={logo.imgSrc} alt={logo.altText} width={130} height={95} />
      </Link>
      {menus.map((menu, index) => (
        <FooterMenu key={index} title={menu.title} links={menu.links} />
      ))}
    </footer>
  );
};

export default Footer;
