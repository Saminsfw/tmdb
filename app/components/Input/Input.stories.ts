import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Hero_search_input: Story = {
  args: {
    placeholder: "Search for a movie,tv show,person...",
  },
};
