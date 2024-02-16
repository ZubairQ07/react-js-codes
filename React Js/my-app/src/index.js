import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main'
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './redux/Reducer';
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import thunk from 'redux-thunk';

  let store = createStore(Reducer , applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <Main />
  </Provider>
);

