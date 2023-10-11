import React from "react";
import classNames from "classnames";
import { NavBarLinkType } from "./NavBarLink.types";
import Link from "next/link";

const NavBarLink = ({ text, url, sublinks, extraClasses }: NavBarLinkType) => {
  let linkClasses = classNames("text-base group font-semibold text-white", {});
  let sublinkClasses = classNames(
    "py-1 px-6 hover:bg-lightGrey rounded-8 font-normal text-black"
  );
  return (
    <div className={`${linkClasses} ${extraClasses ?? ""}`}>
      <Link href={url}>{text}</Link>
      {sublinks && sublinks?.length > 0 && (
        <ul className="absolute top-[55px] bg-white hidden group-hover:block rounded-5 py-2 w-[170px]">
          {sublinks.map((sublink, index) => {
            return (
              <li key={index} className={sublinkClasses}>
                <Link href={sublink.url}>{sublink.text}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBarLink;
