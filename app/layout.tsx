import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { FaSearch } from "react-icons/fa";
import { headerLogo, headerMenu, footerLogo, footerMenus } from "./mockdata";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header logo={headerLogo} menu={headerMenu} ActionIcon={FaSearch} />
        <section className="my-[65px] mx-auto max-w-[1300px]">
          {children}
        </section>
        <Footer logo={footerLogo} menus={footerMenus} />
      </body>
    </html>
  );
}
