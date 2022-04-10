import { FC } from 'react';
import { IInputElements } from '../../../interfaces/form';

import Label from './Label';

const Input: FC<IInputElements> = ({
  type,
  previewClassName,
  showIcon,
  checked,
  hidden,
  name,
  inputIdentifier,
  placeholder,
  onChange,
  value,
  label,
  isRequired,
  error,
  onBlur,
}) => {
  return (
    <div
      className={`input-wrapper ${previewClassName ? previewClassName : ''}`}
    >
      <input
        type={type}
        name={name}
        value={value !== null ? value : ''}
        id={inputIdentifier}
        placeholder={placeholder}
        onChange={onChange}
        data-test="component-input"
        autoComplete={'off'}
        onBlur={onBlur}
        className={error ? 'input-error' : ''}
        checked={checked}
      />

      <Label
        className={value && value !== '' ? 'top' : ''}
        htmlFor={'inputIdentifier'}
        isRequired={isRequired}
        label={label ? label : ''}
      />

      {showIcon && (
        <span
          className={`${
            hidden ? 'chevron-down' : 'chevron-up'
          } icon icon-chevron`}
        />
      )}
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;
