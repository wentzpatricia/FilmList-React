import { useEffect, useState } from "react";
import { getByTitle } from "../../service/ApiConfig";
import { MoviesList } from "./MoviesList";
import { FormStyle, MoviesContainer, MoviesListContainer } from "./MoviesStyle";
import { SearchBox } from "./SearchBox";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue: string) => {
    await getByTitle(`${searchValue}`)
      .get("")
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      })
      .catch((error) => {
        console.log(`Error ${error}`);
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      getMovieRequest(searchValue);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [searchValue]);

  return (
    <MoviesContainer>
      <FormStyle>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </FormStyle>
      <MoviesListContainer>
        <MoviesList movies={movies} />
      </MoviesListContainer>
    </MoviesContainer>
  );
};
