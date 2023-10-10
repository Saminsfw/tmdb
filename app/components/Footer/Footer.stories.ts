import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";
import { footerLogo, footerMenus } from "@/app/mockdata";
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
    logo: footerLogo,
    menus: footerMenus,
  },
};
