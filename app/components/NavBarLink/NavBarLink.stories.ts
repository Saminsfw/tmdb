import type { Meta, StoryObj } from "@storybook/react";
import NavBarLink from "./NavBarLink";
const meta = {
  title: "Components/NavBarLink",
  component: NavBarLink,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof NavBarLink>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Link: Story = {
  args: {
    text: "Movies",
    url: "/movies",
  },
};
