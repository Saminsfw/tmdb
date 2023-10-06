import type { Meta, StoryObj } from "@storybook/react";
import MovieCard from "./MovieCard";
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
  args: {
    movieImage: {
      url: "/",
      imgSrc: "https://placehold.co/150x20",
      altText: "MovieCard Image",
    },
    rating: 40,
    title: "The Good Doctor",
    date: "27 Sep 2014.",
  },
};
