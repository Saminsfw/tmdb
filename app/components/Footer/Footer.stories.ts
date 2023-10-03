import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";
const meta = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Footer_component: Story = {
  args: {
    logo: {
      url: "/",
      imgSrc: "https://placehold.co/130x95",
      altText: "Footer Logo",
    },
    menus: [
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
    ],
  },
};
