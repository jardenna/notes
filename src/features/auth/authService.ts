import { KeyValuePair } from '../../interfaces/interfaces';
import { loginUrl, logoutUrl, signupUrl } from '../../utils/endpoints';
import fetchApi from '../../utils/fetchApi';

// Register user
const register = async (userData: KeyValuePair<string>) => {
  const response = await fetchApi('post', signupUrl, userData);

  return response;
};

const login = async (formData: KeyValuePair<string>) => {
  const response = await fetchApi('post', loginUrl, formData);
  return response;
};

const logout = async () => {
  const response = await fetchApi('get', logoutUrl);
  return response;
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
