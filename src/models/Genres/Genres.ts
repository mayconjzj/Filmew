export type MovieGenreProps = {
  genre: {
    name: string;
    id: string;
  };
};

export type GenreProps = {
  id: string;
  name: string;
};

export type GenresProps = {
  genres: GenreProps[];
};
