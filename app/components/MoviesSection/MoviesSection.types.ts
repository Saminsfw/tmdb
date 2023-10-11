import { MovieCardType } from "../MovieCard/MovieCard.types";
export type TabType = {
  tabName: string;
  onClick?: React.MouseEventHandler;
};
export type MoviesSectionType = {
  title: string;
  tabs?: Array<TabType>;
  moviesList: Array<MovieCardType>;
  extraClasses?: string;
};
