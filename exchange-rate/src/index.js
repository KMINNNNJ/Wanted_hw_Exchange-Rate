import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Redux의 Provider 가져오기
import store from './store'; // Redux store 가져오기
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
