import { BlurEventType, ChangeEventType, FormEventType } from './events';

export interface FormProps {
  btnVaiant?: string;
  btnText: string;
  className?: string;
  onSubmit: (e: FormEventType) => void;
  inputs: InputListProps[];
  onClearAll?: () => void;
  showResetButton?: boolean;
  onChange: (e: ChangeEventType) => void;
  onBlur?: (e: BlurEventType) => void;
  hidden?: boolean;
}
export interface InputListProps {
  name: string;
  value: string;
  label: string;
  inputIdentifier: string;
  placeholder?: string;
  error?: string;
  isRequired?: boolean;
  type?: string;
  checked?: boolean;
  hidden?: boolean;
}
export interface InputProps extends InputListProps {
  onChange: (e: ChangeEventType) => void;
  onBlur?: (e: BlurEventType) => void;
}

export interface ILabel {
  className: string;
  htmlFor: string;
  label: string;
  text?: string;
  isRequired?: boolean;
}
