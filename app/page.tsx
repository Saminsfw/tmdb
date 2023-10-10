import Hero from "./components/Hero-section/Hero";
import MoviesSection from "./components/MoviesSection/MoviesSection";
import { movies, tabs } from "./mockdata";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <Hero
        title="Welcome."
        description="Millions of movies, TV shows and people to discover. Explore now."
      />
      <MoviesSection title="Trending" tabs={tabs} moviesList={movies} />
      <MoviesSection title="What's Popular" moviesList={movies} />
    </main>
  );
}
