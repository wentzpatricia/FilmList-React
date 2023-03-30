export interface MoviesInterface {
  Year: string;
  Title: string;
  imdbID: string;
  Poster: string;
}

export interface MovieDetailInterface extends MoviesInterface {
  imdbRating: string;
  Type: string;
  Plot: string;
  Genre: string;
  Director: string;
  Released: string;
  Runtime: string;
}
