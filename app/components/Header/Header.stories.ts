import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { FaSearch } from "react-icons/fa";
import { headerLogo, headerMenu } from "../../mockdata/index";
const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Header_component: Story = {
  args: {
    logo: headerLogo,
    menu: headerMenu,
    ActionIcon: FaSearch,
  },
};
