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
  View,
  TouchableOpacity
} from 'react-native';

import Home from './components/home/home';
import Login from './components/login/login';
import FreePublish from './components/freePublish/freePublish';
import Contact from './components/contact/contact';

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';


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
  'Contáctenos'        : { screen: Contact }
},
{
  //drawerWidth: 200,
  drawerPosition: 'right',
  //contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>,
  drawerBackgroundColor: 'transparent'
});

{/*

const App = () => (
  // You need to place a MenuContext somewhere in your application, usually at the root.
  // Menus will open within the context, and only one menu can open at a time per context.
  <MenuContext style={{ flex: 1 }}>
    <TopNavigation/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Hello!</Text></View>
  </MenuContext>
);
const renderTouchable = () => <TouchableOpacity/>;
const TopNavigation = () => (
  <View style={{ padding: 10, flexDirection: 'row', backgroundColor: 'pink' }}>
    <View style={{ flex: 1 }}><Text>My App</Text></View>
    <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
      <MenuTrigger>
        <Text style={{ fontSize: 20 }}>&#8942;</Text>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1} renderTouchable={renderTouchable}>
          <Text>One</Text>
        </MenuOption>
        <MenuOption value={2} renderTouchable={renderTouchable}>
          <Text>Two</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
);
*/}


export default App;
