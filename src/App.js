import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import faribase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import {enableScreens} from 'react-native-screens';

export default class App extends Component {
  componentDidMount() {
    faribase.initializeApp({
      apiKey: 'AIzaSyCKiANvjd80Y24AyCNNAAjjDAketNhrWG4',
      authDomain: 'react-redux-manager-d4700.firebaseapp.com',
      databaseURL:
        'https://react-redux-manager-d4700-default-rtdb.firebaseio.com',
      projectId: 'react-redux-manager-d4700',
      storageBucket: 'react-redux-manager-d4700.appspot.com',
      messagingSenderId: '1076208053659',
      appId: '1:1076208053659:web:ac0b47b3f8d0ba200ec53e',
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    enableScreens();
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
