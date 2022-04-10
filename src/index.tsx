import './scss/style.scss';

import { render } from 'react-dom';

import App from './components/App';

const wrapper = document.getElementById('root');
render(<App />, wrapper);

//------------------------------------

if (module && module.hot) {
  module.hot.accept();
}
