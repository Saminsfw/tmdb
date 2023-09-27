import React from 'react';
import NavBarMenu from '../NavBarMenu/NavBarMenu';
import Link from 'next/link';
import { HeaderType } from './Header.types';
import Image from 'next/image';
import classNames from 'classnames';

const Header = ({ logo, menu, ActionIcon, extraClasses }: HeaderType) => {
  let headerClasses = classNames(
    'fixed top-0 flex px-[260px] gap-4 bg-darkBlue w-full h-16 items-center'
  );
  return (
    <header className={`${headerClasses} ${extraClasses}`}>
      <Link href={logo.url} className='inline-block h-5 w-40'>
        <Image src={logo.imgSrc} alt={logo.altText} width={160} height={20} />
      </Link>
      <NavBarMenu links={menu.links} />
      <ActionIcon className='text-lightBlue ml-auto cursor-pointer' />
    </header>
  );
};

export default Header;
