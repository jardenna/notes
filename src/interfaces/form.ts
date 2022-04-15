import { BlurEventType, ChangeEventType, FormEventType } from './events';

export interface IFormElements {
  btnVaiant?: string;
  btnText: string;
  className?: string;
  onSubmit: (e: FormEventType) => void;
  inputs: InputListProps[];
  onClearAll?: () => void;
  clearBtn?: boolean;
  onChange: (e: ChangeEventType) => void;
  onBlur?: (e: BlurEventType) => void;
}

export interface InputProps extends InputListProps {
  onChange: (e: ChangeEventType) => void;
  onBlur?: (e: BlurEventType) => void;
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

export interface ILabel {
  className: string;
  htmlFor: string;
  label: string;
  text?: string;
  isRequired: boolean | undefined;
}
