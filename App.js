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
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Image
} from 'react-native';

import Home from './components/home/home';
import Login from './components/login/login';
import FreePublish from './components/freePublish/freePublish';
import Contact from './components/contact/contact';
import Header from './components/_partials/header/header';

import styles from './styles';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './redux/reducers';
import SuperheroesList from './redux/superheroesList';

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

//import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';


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

const Menu = (props) => (
  <View style={localStyles.container}>
    <Text style={localStyles.logo}>
      <Image
        source={require('./logo-negativo.png')}
      />
    </Text>
    <ModalDropdown
      options={['Inicio', 'Listado de Publicaciones', 'Contáctanos']}
      onSelect={(idx, value) => value != props.navigation.state.routeName ? props.navigation.navigate(value) : false}
      showsVerticalScrollIndicator={false}
      style={styles.tabIcon}
      dropdownStyle={{borderRadius: 5, height: 120}}
      dropdownTextStyle={{color: '#485A96', fontSize: 13}}
      >
      <Icon name="navicon" size={40} color="#F19700" />
    </ModalDropdown>
    {/*
    <TouchableHighlight onPress={() => props.navigation.navigate('Inicio')} style={styles.tabIcon}>
      <Icon name="navicon" size={40} color="#F19700" />
    </TouchableHighlight>
    */}
    <TouchableHighlight onPress={() => props.navigation.navigate('Login')} underlayColor={'#485A96'} style={styles.tabIcon}>
      <Icon name="user" size={40} color="#F19700" />
    </TouchableHighlight>
  </View>
);

const Stack = StackNavigator(
 {
   'Inicio': { screen: Home },
   'Login': { screen: Login },
   'Listado de Publicaciones': { screen: FreePublish },
   'Contáctanos': { screen: Contact },
 },
 {
   headerMode: 'float',
   mode: 'modal',

   navigationOptions: ({navigation}) => ({
     headerBackTitle: 'none',
     header: <Menu navigation={navigation}/>,
    }),
 }
);

class App extends Component {
  render() {
    return (
      <Provider store={createStore(Reducers)}>
        <SuperheroesList />
      </Provider>
    );
  }
}

//<Button onPress={() => navigation.navigate('Login')} />,

{/*
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
*/}
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
var localStyles = StyleSheet.create({
  container: {
    padding: 8,
    paddingRight: 0,
    flexDirection: 'row',
    backgroundColor: '#485A96'
  },
  logo: {
    flexDirection: 'column',
    flex: 3,
    margin: 5
  },
});

export default App;
