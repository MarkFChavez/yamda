import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './main.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const Root = () => {
  return (
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
