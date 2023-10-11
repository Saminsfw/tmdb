import type { Meta, StoryObj } from "@storybook/react";
import MoviesSection from "./MoviesSection";
import { movies, tabs } from "../../mockdata";

const meta = {
  title: "Components/MovieSection",
  component: MoviesSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MoviesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Movie_Section: Story = {
  args: {
    title: "Trending",
    tabs: tabs,
    moviesList: movies,
  },
};
