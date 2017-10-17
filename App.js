/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import Home from './components/home/home';
import Login from './components/login/login';
import FreePublish from './components/freePublish/freePublish';
import Contact from './components/contact/contact';

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';



{/*
  export default class App extends Component<{}> {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>
      );
    }
  }
*/}

const App = DrawerNavigator({
  'Inicio'          : { screen: Home },
  'Login'           : { screen: Login },
  'Publicar Gratis' : { screen: FreePublish },
  'Contacto'        : { screen: Contact }
});



export default App;
