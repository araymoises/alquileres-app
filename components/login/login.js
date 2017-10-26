import React, { Component } from 'react';
import {
  Switch,
  SliderIOS,
  PickerIOS,
  PickerItemIOS,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  Button,
  TouchableHighlight,
  Linking
} from 'react-native';

import t from 'tcomb-form-native';

import Header from './../_partials/header/header';
import Footer from './../_partials/footer/footer';

import CheckBox from 'react-native-checkbox';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

//import Button from './Button';
const style_card = StyleSheet.create({
  title: {
    fontSize: 20,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  }
});

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
  return reg.test(email);
});


var Form = t.form.Form;

var Person = t.struct({
  Correo: Email,               // a required string
  //Correo: t.maybe(t.String), // an optional string
  Password: t.String,          // a required number
  //rememberMe: t.Boolean        // a boolean
});
var options = {
  auto: 'placeholders',
  fields: {
    Password: {
      password: true,
      secureTextEntry: true
    }
  }
};

export default class MyMainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }
  }

  setParentState(args){
    this.props.setParentState(args)
  }

  getData(){
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((data) => data.json())
    .then((dataJson) =>{
      alert(dataJson.movies[0].title);
    })
    .catch((error) => {
        console.error(error);
    });
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    return (
      <View style={{backgroundColor: '#485A96', flex: 1}}>
        <View style={{height: 56}}>
          <Header />
        </View>

        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>
              Bienvenido
            </Text>
            <Form
              ref="form"
              type={Person}
              options={options}
            />
            <CheckBox
              label='Recordar'
              checked={false}
              onChange={(checked) => console.log('I am checked', checked)}
            />
            <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Aceptar</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.onPress} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>¿Olvidó su Contraseña?</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Crear una Cuenta nueva</Text>
            </TouchableHighlight>
          </View>
          <View style={{height: 70}}>
            <Footer />
          </View>
        </ScrollView>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#cbd2e6',
    flex: 4
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 10
  },
  button: {
    height: 36,
    backgroundColor: '#F19700',
    borderColor: '#F19700',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginBottom: 30
  }
});

// Shadow props are not supported in React-Native Android apps.
// The below part handles this issue.

// iOS Styles
var iosStyles = StyleSheet.create({
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 5},
    shadowRadius: 5,
    shadowOpacity: 0.75,
  }
});

const iosMinTrTintColor = '#1073ff';
const iosMaxTrTintColor = '#b7b7b7';
const iosThumbTintColor = '#343434';

// Android styles
const androidStyles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
  },
  track: {
    height: 4,
    borderRadius: 4 / 2,
  },
  thumb: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
  },
  touchArea: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  debugThumbTouchArea: {
    position: 'absolute',
    backgroundColor: 'green',
    opacity: 0.5,
  }
});

const androidMinTrTintColor = '#26A69A';
const androidMaxTrTintColor = '#d3d3d3';
const androidThumbTintColor = '#009688';


const sliderStyles = (Platform.OS === 'ios') ? iosStyles : androidStyles;
const minimumTrackTintColor = (Platform.OS === 'ios') ? iosMinTrTintColor : androidMinTrTintColor;
const maximumTrackTintColor = (Platform.OS === 'ios') ? iosMaxTrTintColor : androidMaxTrTintColor;
const thumbTintColor = (Platform.OS === 'ios') ? iosThumbTintColor : androidThumbTintColor;
