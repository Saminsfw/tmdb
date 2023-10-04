import Hero from "./components/Hero-section/Hero";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero
        title="Welcome."
        description="Millions of movies, TV shows and people to discover. Explore now."
      />
    </main>
  );
}
