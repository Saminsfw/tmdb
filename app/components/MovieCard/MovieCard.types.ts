export type ImageType = {
  imgSrc: string;
  url: string;
  altText: string;
};
export type MovieCardType = {
  movieImage: ImageType;
  title: string;
  date: string;
  rating: number;
  extraClasses?: string;
};
