import { FC } from 'react';

import SearchIcon from './svg/SearchIcon';

interface ISearch {
  onClick: (name: string) => void;
  onChange: () => void;
  value: string;
  placeholder: string;
  name: string;
  onToggleInput: () => void;
  classNameHidden: string;
}

const Search: FC<ISearch> = ({
  onClick,
  onChange,
  value,
  placeholder,
  name,
  onToggleInput,
  classNameHidden,
}) => {
  return (
    <form className="search">
      <SearchIcon onClick={onToggleInput} />
      <div className="input-wrapper">
        <div className={classNameHidden}>
          <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
          />

          <span onClick={() => onClick(name)} className="icon-x" />
        </div>
      </div>
    </form>
  );
};

export default Search;

Search.defaultProps = {
  placeholder: '',
};
