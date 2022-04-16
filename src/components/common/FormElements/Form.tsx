import { FC, Fragment } from 'react';
import { FormProps } from '../../../interfaces/form';

import Button from '../Button';
import Input from './Input';
import TextArea from './Textarea';

const Form: FC<FormProps> = ({
  btnVaiant,
  btnText,
  onSubmit,
  className,
  inputs,
  onChange,
  onClearAll,
  showResetButton,
  onBlur,
}) => {
  const btnClass = `btn-${btnVaiant ? btnVaiant : 'primary'}`;

  return (
    <form onSubmit={onSubmit} noValidate className={className}>
      {inputs.map((input) => {
        return (
          <Fragment key={input.inputIdentifier}>
            {input.type !== 'textarea' ? (
              !input.hidden && (
                <Input
                  type={input.type}
                  name={input.name}
                  value={input.value}
                  inputIdentifier={input.inputIdentifier}
                  label={input.label}
                  isRequired={input.isRequired}
                  error={input.error}
                  onChange={onChange}
                  checked={input.checked}
                  onBlur={onBlur}
                />
              )
            ) : (
              <TextArea
                name={input.name}
                value={input.value}
                inputIdentifier={input.inputIdentifier}
                label={input.label}
                isRequired={input.isRequired}
                error={input.error}
                onChange={onChange}
              />
            )}
          </Fragment>
        );
      })}

      <footer className="form-footer">
        <Button type="submit" className={btnClass} btnText={btnText} />
        {showResetButton && (
          <Button
            type="reset"
            className={btnClass}
            btnText={'Clear'}
            onClick={onClearAll}
          />
        )}
      </footer>
    </form>
  );
};
export default Form;
