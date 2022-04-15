import { FC } from 'react';

import { InputProps } from '../../../interfaces/form';

import Label from './Label';

const Input: FC<InputProps> = ({
  type,

  name,
  inputIdentifier,
  placeholder,
  onChange,
  value,
  label,
  isRequired,
  error,
  onBlur,
  checked,
}) => {
  return (
    <div className="input-wrapper">
      <input
        type={type || 'text'}
        name={name}
        value={value !== null ? value : ''}
        id={inputIdentifier}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={error ? 'input-error' : ''}
        checked={checked}
      />
      <Label
        className={value && value !== '' ? 'top' : ''}
        htmlFor={'inputIdentifier'}
        isRequired={isRequired}
        label={label || ''}
      />

      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;
