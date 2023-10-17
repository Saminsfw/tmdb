export const fetcher = (...args: any) =>
  //@ts-ignore
  fetch(...args).then((res) => res.json());

export const apiBaseUrl = "https://api.themoviedb.org";
export const apiKey = "898a0fb8fb692bc2c1c31e27c9dbb54b";
export const imgUrl = "https://image.tmdb.org/t/p/original";
