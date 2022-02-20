import { FC } from 'react';
interface IButtons {
  type?: 'submit' | 'reset';
  id?: string;
  className: string;
  onClick?: () => void;
  btnVaiant?: string;
  btnText?: string | number;
}

const Button: FC<IButtons> = (props) => {
  return (
    <button
      type={props.type}
      id={props.id}
      className={props.className}
      onClick={props.onClick}
    >
      {props.btnText}
    </button>
  );
};
export default Button;
