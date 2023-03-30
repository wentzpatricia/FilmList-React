import { Dispatch, SetStateAction } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { FormStyle } from './MoviesStyle';

interface SearchBoxProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  value?: string;
}

export const SearchBox = (props: SearchBoxProps) => {
  const onChangeMovie = (event: React.FormEvent<HTMLInputElement>) => {
    props.setSearchValue(event.currentTarget.value);
  };

  return (
    <FormStyle>
      <form>
        <input
          type="text"
          value={props.value}
          onChange={onChangeMovie}
          placeholder="Search movie by the name"
        />
        <button>
          <BiSearchAlt />
        </button>
      </form>
    </FormStyle>
  );
};
