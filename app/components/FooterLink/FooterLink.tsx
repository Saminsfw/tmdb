import React from "react";
import classNames from "classnames";
import { FooterLinkType } from "./FooterLink.types";
import Link from "next/link";

const FooterLink = ({ text, url, extraClasses }: FooterLinkType) => {
  let linkClasses = classNames("text-white text-[18px] leading-[23px]");
  return (
    <Link className={`${linkClasses} ${extraClasses ?? ""}`} href={url}>
      {text}
    </Link>
  );
};

export default FooterLink;
