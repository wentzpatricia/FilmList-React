import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetailInterface } from './MoviesInterface';
import {
  ContainerLeft,
  ContainerRight,
  MovieDetailContainer,
} from './MovieDetailStyle';
import { getByOmdbID } from '../../service/ApiConfig';
import { BsFillStarFill } from 'react-icons/bs';

interface MovieDetailProps {
  imdbID: string;
}

export const MovieDetail: React.FC<MovieDetailProps> = (props) => {
  const [movie, setData] = useState<MovieDetailInterface | null>(null);

  const { imdbIDParams } = useParams();

  const getMovieByImdbID = () => {
    getByOmdbID(`${props.imdbID ? props.imdbID : imdbIDParams}`)
      .get('', { params: { i: imdbIDParams } })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(`Error ${error}`);
      });
  };

  useEffect(() => {
    getMovieByImdbID();
  }, []);

  return (
    <div>
      {movie && (
        <MovieDetailContainer>
          <ContainerLeft>
            <h2>
              {movie.Title}{' '}
              <span>
                <BsFillStarFill />
                {movie.imdbRating}
              </span>
            </h2>
            <h3>
              <span>Director: </span>
              {movie.Director}
            </h3>
            <h3>
              <span>Genre: </span>
              {movie.Genre}
            </h3>
            <h3>
              <span>Released: </span>
              {movie.Released}
            </h3>
            <h3>
              <span>Type: </span>
              {movie.Type}
            </h3>
            <h3>
              <span>Runtime: </span>
              {movie.Runtime}
            </h3>
            <p>
              <span>Plot: </span>
              {movie.Plot}
            </p>
          </ContainerLeft>
          <ContainerRight>
            <img src={movie.Poster} alt="Poster of movie" />
          </ContainerRight>
        </MovieDetailContainer>
      )}
    </div>
  );
};
