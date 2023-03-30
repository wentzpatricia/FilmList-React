import { useState } from 'react';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../Modal/Modal';
import { MovieDetail } from './MovieDetail';
import { MoviesInterface } from './MoviesInterface';

interface MoviesListProps {
  movies: MoviesInterface[];
}

export const MoviesList: React.FC<MoviesListProps> = (props) => {
  const [selectImdbID, setSelectImdbID] = useState('');
  const { isOpen, toggle } = useModal();

  const toggleHandler = (imdbID: string) => {
    setSelectImdbID(imdbID);
    toggle();
  };

  return (
    <>
      {props.movies.map((movie: MoviesInterface, index: number) => (
        <ul key={movie.imdbID}>
          <li>
            <button
              onClick={() => {
                toggleHandler(movie.imdbID);
              }}
            >
              <img src={movie.Poster} alt="Poster of movie"></img>
            </button>
          </li>
        </ul>
      ))}
      <Modal isOpen={isOpen} toggle={toggle}>
        <MovieDetail imdbID={selectImdbID} />
      </Modal>
    </>
  );
};
