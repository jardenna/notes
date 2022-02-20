import { FC, Fragment } from 'react';
import { IInputElements } from '../../../interfaces/form';

import Button from '../Button';
import Input from './Input';
import TextArea from './Textarea';

const Form: FC<IInputElements> = ({
  btnVaiant,
  btnText,
  onSubmit,
  className,
  inputs,
  onChange,
  onClearAll,
  clearBtn,
  onBlur,
}) => {
  const btnClass = `btn-${btnVaiant ? btnVaiant : 'primary'}`;

  return (
    <Fragment>
      <form onSubmit={onSubmit} noValidate className={className}>
        {inputs.map((input: HTMLFormElement) => {
          return (
            <Fragment key={input.inputIdentifier}>
              {input.type !== 'textarea' ? (
                <Input
                  type={input.type}
                  name={input.name}
                  value={input.value}
                  inputIdentifier={input.inputIdentifier}
                  label={input.label}
                  isRequired={input.isRequired}
                  error={input.error}
                  previewClassName={input.previewClassName}
                  onChange={onChange}
                  checked={input.checked}
                  onBlur={onBlur}
                />
              ) : (
                <TextArea
                  name={input.name}
                  value={input.value}
                  inputIdentifier={input.inputIdentifier}
                  label={input.label}
                  isRequired={input.isRequired}
                  error={input.error}
                />
              )}
            </Fragment>
          );
        })}

        <footer className="form-footer">
          <Button type="submit" className={btnClass} btnText={btnText} />
          {clearBtn && (
            <Button
              className={btnClass}
              btnText={'Clear'}
              onClick={onClearAll}
            />
          )}
        </footer>
      </form>
    </Fragment>
  );
};
export default Form;
