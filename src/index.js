import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer, applyMiddleware(thunk))
  console.log(store.getState())
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
