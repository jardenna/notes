import { FC } from 'react';
import { ILabel } from '../../../interfaces/form';

const Label: FC<ILabel> = ({ className, htmlFor, label, isRequired }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {label} {isRequired && <span className="required" />}
    </label>
  );
};

export default Label;
