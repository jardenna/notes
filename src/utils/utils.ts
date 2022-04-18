export interface ErrorObjState {
  name?: string;
  email: string;
  password: string;
  password2?: string;
  noUser?: string;
}

const errorObj = {
  name: '',
  email: '',
  password: '',
  password2: '',
  noUser: '',
};

export default errorObj;
