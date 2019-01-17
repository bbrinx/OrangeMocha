import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

fetch('/api/getList')
  .then(res => res.json())
  .then((body) => {
    console.log(body);
  })
  .catch((error) => {
    console.error(error);
  });

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
