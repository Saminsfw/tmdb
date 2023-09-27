import { IconType } from 'react-icons';
import { NavBarMenuType } from '../NavBarMenu/NavBarMenu.types';

export type HeaderType = {
  logo: {
    imgSrc: string;
    url: string;
    altText: string;
  };
  menu: NavBarMenuType;
  ActionIcon: IconType;
  extraClasses?: string;
};
