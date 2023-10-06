import Hero from "./components/Hero-section/Hero";
import MovieCard from "./components/MovieCard/MovieCard";
export default function Home() {
  const movieImage = {
    url: "/",
    imgSrc: "/movie-img.svg",
    altText: "MovieCard Image",
  };
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero
        title="Welcome."
        description="Millions of movies, TV shows and people to discover. Explore now."
      />
      <MovieCard
        movieImage={movieImage}
        title="The Good Doctor"
        date="Sep 25, 2017"
        rating={100}
        extraClasses=""
      />
    </main>
  );
}
