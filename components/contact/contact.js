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
  TouchableHighlight
} from 'react-native';

import t from 'tcomb-form-native';

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

var Form = t.form.Form;

var Person = t.struct({
  Nombre: t.String,              // a required string
  Correo: t.String,              // a required string
  //Correo: t.maybe(t.String),  // an optional string
  Mensaje: t.String,               // a required number
  //rememberMe: t.Boolean        // a boolean
});

var options = {
  auto: 'placeholders'
};

export default class MyMainView extends Component {
  setParentState(args){
    this.props.setParentState(args)
  }

  render(){
    return (
      <ScrollView style={styles.container}>
        {/* display */}
        <Text style={styles.title}>
          Contáctanos
        </Text>
        <Form
          ref="form"
          type={Person}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#F19700',
    borderColor: '#F19700',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
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
