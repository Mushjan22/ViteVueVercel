export interface Film {
  imdbID: number;
  Poster: string;
  Title: string;
}
export interface PaginationProps {
  currentPage: number;
  currentSearch: string;
  pageChangeSearch: (page: number, title: string) => void;
}
export interface SearchProps {
  currentSearch: string;
  pageChangeSearch: (page: number, title: string) => void;
}
export interface ItemProps {
  id: string | number;
  src: string;
  title: string;
}
interface Rating {
  Source: string;
  Value: string;
}

export interface CustomFilm {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
