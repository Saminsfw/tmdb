import type { Meta, StoryObj } from "@storybook/react";
import FooterMenu from "./FooterMenu";
const meta = {
  title: "Components/FooterMenu",
  component: FooterMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FooterMenu>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Footer_Menu: Story = {
  args: {
    title: "THE BASICS",
    links: [
      { text: "About TMDB", url: "/about" },
      { text: "Contact Us", url: "/contact" },
      { text: "Support Forums", url: "/supportforums" },
      { text: "API", url: "/api" },
      { text: "System Status", url: "/status" },
    ],
  },
};
