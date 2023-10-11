import type { Meta, StoryObj } from "@storybook/react";
import MovieCard from "./MovieCard";
import { movieCardItems } from "@/app/mockdata";
const meta = {
  title: "Components/MovieCard",
  component: MovieCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MovieCard>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Hero_component: Story = {
  args: movieCardItems,
};
