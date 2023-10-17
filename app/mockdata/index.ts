import { FooterMenuType } from "../components/FooterMenu/FooterMenu.types";
import { LogoType } from "../components/Header/Header.types";
import { MovieCardType } from "../components/MovieCard/MovieCard.types";
import { NavBarLinkType } from "../components/NavBarLink/NavBarLink.types";
import { MoviesSectionType } from "../components/MoviesSection/MoviesSection.types";
import { NavBarMenuType } from "../components/NavBarMenu/NavBarMenu.types";

export const headerLogo: LogoType = {
  url: "/",
  imgSrc: "/logo.svg",
  altText: "Header Logo",
};
export const headerMenu: NavBarMenuType = {
  links: [
    {
      text: "Movies",
      url: "/movies",
      sublinks: [
        {
          text: "Popular",
          url: "/popular",
        },
        {
          text: "Now Playing",
          url: "/playing",
        },
        {
          text: "Upcoming",
          url: "/upcoming",
        },
        {
          text: "Top Rated",
          url: "/rated",
        },
      ],
    },
    {
      text: "Tv Shows",
      url: "/tv",
      sublinks: [
        {
          text: "Popular",
          url: "/home",
        },
        {
          text: "Airing Today",
          url: "/tv",
        },
        {
          text: "On Tv",
          url: "/people",
        },
        {
          text: "Top Rated",
          url: "/more",
        },
      ],
    },
    {
      text: "People",
      url: "/people",
      sublinks: [
        {
          text: "Popular People",
          url: "/popular",
        },
      ],
    },
    {
      text: "more",
      url: "/more",
      sublinks: [
        {
          text: "Discusion",
          url: "/discussion",
        },
        {
          text: "Leaderboard",
          url: "/leadernoard",
        },
        {
          text: "API",
          url: "/Api",
        },
        {
          text: "Support",
          url: "/Support",
        },
      ],
    },
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
export const movieImage = {
  url: "/",
  imgSrc: "/movie-img.svg",
  altText: "MovieCard Image",
};
export const popupMenuLinks = [
  { text: "Option 1", url: "/option1" },
  { text: "Option 2", url: "/option2" },
  { text: "Option 3", url: "/option3" },
  { text: "Option 4", url: "/option4" },
];
