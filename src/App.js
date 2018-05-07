import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyDOBR28tfwpPL2jP2u22sf6XyJ-EJHzzqU',
      authDomain: 'manager-5781a.firebaseapp.com',
      databaseURL: 'https://manager-5781a.firebaseio.com',
      projectId: 'manager-5781a',
      storageBucket: '',
      messagingSenderId: '239822135847'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;