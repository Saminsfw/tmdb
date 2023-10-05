import type { Meta, StoryObj } from "@storybook/react";
import RatingComponent from "./Rating";
const meta = {
  title: "Components/RatingComponent",
  component: RatingComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof RatingComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Rating_component: Story = {
  args: {
    value: 100,
  },
};
