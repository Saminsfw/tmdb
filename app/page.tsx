"use client";
import useSWR from "swr";
import Hero from "./components/Hero-section/Hero";
import MoviesSection from "./components/MoviesSection/MoviesSection";
import { useState } from "react";
import { apiBaseUrl, apiKey, fetcher, imgUrl } from "./api";
import { popupMenuLinks } from "./mockdata";
export default function Home() {
  const [timeWindow, setTimeWindow] = useState<"day" | "week">("day");
  const {
    data: popularData,
    error: popularError,
    isLoading: popularLoading,
  } = useSWR(`${apiBaseUrl}/3/movie/popular?api_key=${apiKey}`, fetcher);
  const {
    data: trendingData,
    error: trendingError,
    isLoading: trendingLoading,
  } = useSWR(
    `${apiBaseUrl}/3/trending/movie/${timeWindow}?api_key=945747413f8ed82865430ae895bdf874`,
    fetcher
  );

  if (popularLoading || trendingLoading) {
    return <div>...Loading...</div>;
  }

  if (popularError) {
    return <div>Error: {popularError.message || "An error occurred"}</div>;
  }

  const getFormattedMovies = (movies: any) =>
    movies.map((movie: any) => {
      return {
        movieImage: {
          imgSrc: `${imgUrl}${movie.poster_path}`,
          altText: "Image Not Found",
          url: "/",
        },
        title: movie.title,
        date: movie.release_date,
        rating: Math.floor(movie.vote_average * 10),
        popupMenuLinks: popupMenuLinks,
      };
    });
  const trendingMovies = getFormattedMovies(trendingData.results);
  const popularMovies = getFormattedMovies(popularData.results);

  if (!trendingData && !trendingError) {
    return <div>...Loading...</div>;
  }

  if (trendingError) {
    return <div>Error: {trendingError.message || "An error occurred"}</div>;
  }

  let tabs = [
    { tabName: "Today", onClick: () => setTimeWindow("day") },
    { tabName: "This Week", onClick: () => setTimeWindow("week") },
  ];
  return (
    <main className="flex flex-col items-center justify-center ">
      <Hero
        title="Welcome."
        description="Millions of movies, TV shows and people to discover. Explore now."
      />
      <MoviesSection title="Trending" tabs={tabs} moviesList={trendingMovies} />
      <MoviesSection title="What's Popular" moviesList={popularMovies} />
    </main>
  );
}
