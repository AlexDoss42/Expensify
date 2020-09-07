import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './stores/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from "./firebase/firebase";
import { startSetExpenses } from './actions/expenses';

const store = configureStore();

jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

firebase.auth().onAuthStateChanged(() => {
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      ReactDOM.render(jsx, document.getElementById('app'));
    });
  } else {
    history.push('/');
  }
});