import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import manageBoards from './reducers/manageBoards';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  manageBoards,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// By including the Provider,
// we'll be able to access our Redux store
// and/or dispatch actions from any component we want,
// regardless of where it is on the component tree.

ReactDOM.render(
  // pass store in as a prop
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
