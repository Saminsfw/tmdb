import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";
const meta = {
  title: "Components/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Search_bar: Story = {
  args: {},
};
