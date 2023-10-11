import { FooterMenuType } from "../components/FooterMenu/FooterMenu.types";
import { LogoType } from "../components/Header/Header.types";
import { MenuPopupType } from "../components/MenuPopup/MenuPopup.types";
import { MovieCardType } from "../components/MovieCard/MovieCard.types";
import { NavBarMenuType } from "../components/NavBarMenu/NavBarMenu.types";
import { MoviesSectionType } from "../components/MoviesSection/MoviesSection.types";

export const headerLogo: LogoType = {
  url: "/",
  imgSrc: "/logo.svg",
  altText: "Header Logo",
};
export const headerMenu: NavBarMenuType = {
  links: [
    { text: "Movies", url: "/movies" },
    { text: "Tv Shows", url: "/tvshows" },
    { text: "People", url: "/people" },
    { text: "More", url: "/more" },
  ],
};

export const footerLogo: LogoType = {
  url: "/",
  imgSrc: "footer-logo.svg",
  altText: "Footer Logo",
};
export const footerMenus: FooterMenuType[] = [
  {
    title: "THE BASICS",
    links: [
      { text: "About TMDB", url: "/about" },
      { text: "Contact Us", url: "/contact" },
      { text: "Support Forums", url: "/supportforums" },
      { text: "API", url: "/api" },
      { text: "System Status", url: "/status" },
    ],
  },
  {
    title: "GET INVOLVED",
    links: [
      { text: "Contribution Bible", url: "/" },
      { text: "Add New Movie", url: "/" },
      { text: "Add New TV Show", url: "/" },
    ],
  },
  {
    title: "COMMUNITY",
    links: [
      { text: "Guidelines", url: "/guidelines" },
      { text: "Discussions", url: "/discussions" },
      { text: "Leaderboard", url: "/leaderboard" },
      { text: "Twitter", url: "/twitter" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { text: "Terms of Use", url: "/" },
      { text: "API Terms of Use", url: "/" },
      { text: "Privacy Policy", url: "/" },
      { text: "DMCA Takedown Request", url: "/" },
    ],
  },
];
export const movies: Array<MovieCardType> = [
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
  {
    movieImage: {
      url: "/",
      imgSrc: "movie-img.svg",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
    popupMenuLinks: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
];
export const navBarMenuItems: NavBarMenuType = {
  links: [
    { text: "Movies", url: "/movies" },
    { text: "Tv Shows", url: "/tvshows" },
    { text: "People", url: "/people" },
    { text: "More", url: "/more" },
  ],
};
export const movieImage = {
  url: "/",
  imgSrc: "/movie-img.svg",
  altText: "MovieCard Image",
};
export let tabs: MoviesSectionType["tabs"] = [
  { tabName: "Today" },
  { tabName: "This Week" },
];
