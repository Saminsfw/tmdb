import type { Meta, StoryObj } from "@storybook/react";
import FooterMenu from "./FooterMenu";
import { footerMenus } from "../../mockdata";
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
  args: footerMenus[0],
};
