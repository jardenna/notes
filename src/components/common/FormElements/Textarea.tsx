import { FC } from 'react';
import { IInputElements } from '../../../interfaces/form';

const TextArea: FC<IInputElements> = ({
  name,
  inputIdentifier,
  placeholder,
  onChange,

  value,
  label,
  isRequired,
  error,
}) => {
  return (
    <div className="input-wrapper">
      <textarea
        name={name}
        id={inputIdentifier}
        placeholder={placeholder}
        onChange={onChange}
        data-test="component-textarea"
        value={value !== null ? value : ''}
      />
      <label className={value !== '' ? 'top' : ''} htmlFor={inputIdentifier}>
        {label}
        {isRequired && '*'}
      </label>
      {error}
    </div>
  );
};

export default TextArea;
