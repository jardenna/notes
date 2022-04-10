import { BlurEventType, ChangeEventType, FormEventType } from './events';

export interface IFormElements {
  error?: string;
  btnVaiant?: string;
  btnText?: string;
  className?: string;
  onSubmit?: (e: FormEventType) => void;
  inputs?: any;
  onClearAll?: () => void;
  clearBtn?: any;
}

export interface IInputElements extends IFormElements {
  name?: string;
  onChange?: (e: ChangeEventType) => void;
  onBlur?: (e: BlurEventType) => void;
  value?: string;
  label?: string;
  isRequired?: boolean;
  type?: string;
  inputIdentifier?: string;
  placeholder?: string;
  previewClassName?: string;
  showIcon?: boolean;
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
