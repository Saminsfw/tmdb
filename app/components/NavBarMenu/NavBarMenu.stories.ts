import type { Meta, StoryObj } from "@storybook/react";
import NavBarMenu from "./NavBarMenu";
import { navBarMenuItems } from "@/app/mockdata";
const meta = {
  title: "Components/NavBarMenu",
  component: NavBarMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof NavBarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Navbar_Menu: Story = {
  args: navBarMenuItems,
};
