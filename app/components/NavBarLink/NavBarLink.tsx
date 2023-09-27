import React from 'react';
import classNames from 'classnames';
import { NavBarLinkType } from './NavBarLink.types';
import Link from 'next/link';

const NavBarLink = ({ text, url, extraClasses }: NavBarLinkType) => {
  let linkClasses = classNames('text-white text-base font-semibold');
  return (
    <Link className={`${linkClasses} ${extraClasses ?? ''}`} href={url}>
      {text}
    </Link>
  );
};

export default NavBarLink;
