import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { FaSearch } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const headerLogo = {
  url: "/",
  imgSrc: "/logo.svg",
  altText: "Header Logo",
};
const headerMenu = {
  links: [
    { text: "Movies", url: "/movies" },
    { text: "Tv Shows", url: "/tvshows" },
    { text: "People", url: "/people" },
    { text: "More", url: "/more" },
  ],
};
const footerLogo = {
  url: "/",
  imgSrc: "footer-logo.svg",
  altText: "Footer Logo",
};
const footerMenus = [
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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header logo={headerLogo} menu={headerMenu} ActionIcon={FaSearch} />
        <section className="m-[65px]">{children}</section>
        <Footer logo={footerLogo} menus={footerMenus} />
      </body>
    </html>
  );
}
