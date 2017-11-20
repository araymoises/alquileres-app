import React, { Component } from 'react';

import {
  Switch,
  SliderIOS,
  Picker,
  PickerIOS,
  PickerItemIOS,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  Button,
  Image,
  TouchableHighlight
} from 'react-native';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

import styles from './../../styles';
import Header from './../_partials/header/header';
import Footer from './../_partials/footer/footer';
import Publication from './../_partials/publication/publication';
import Agency from './../_partials/agency/agency';


import ModalDropdown from 'react-native-modal-dropdown';


//import Button from './Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const style_card = StyleSheet.create({
  title: {
    fontSize: 20,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  }
});

export default class MyMainView extends Component {
  setParentState(args){
    this.props.setParentState(args)
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoadingPublications: true,
      isLoadingAgencies: true,
      publications: new Array(),
      agencies: new Array(),
    }
  }

  getPublications(){
    return fetch('https://alquileres-pisos.com/rest/search/?limit=2&offset=0', {
      method: 'GET',
    headers: {
      'api-key': '$2y$10$HNKLFs5FUQCVnzHbVH18O.hovhZaRHorsm29rmaQbA4TPKmp0qTeu'
    }}
    )
    .then((data) => data.json())
    .then((dataJson) => {
      this.setState({
          publications: dataJson.publications,
          isLoadingPublications: false
        }, function() {
          // do something with new state
        });
    })
    .catch((error) => {
        console.error(error);
    });
  }

  getAgencies(){
    return fetch('https://alquileres-pisos.com/rest/agencias', {
      method: 'GET',
    headers: {
      'api-key': '$2y$10$HNKLFs5FUQCVnzHbVH18O.hovhZaRHorsm29rmaQbA4TPKmp0qTeu'
    }}
    )
    .then((data) => data.json())
    .then((dataJson) => {
      this.setState({
          agencies: dataJson,
          isLoadingAgencies: false
        }, function() {
          // do something with new state
        });
    })
    .catch((error) => {
        console.error(error);
    });
  }

  componentDidMount(){
    this.getPublications();
    this.getAgencies();
  }

  render(){
    return (
      <View>
        {/*
        <View style={{height: 70}}>
          <Header />
        </View>
        */}
        <ScrollView
          pointerEvents="box-none"
          style={styles.scrollView}
          scrollEventThrottle={200}
          contentInset={{top: 0}}
          >
          <View style={styles.container}>
            <View style={localStyles.homeFiltroContainer}>
              <Text  style={localStyles.homeFiltroTitle}>Realiza tu búsqueda aquí</Text>
              <Picker
                //selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                <Picker.Item label="¿Qué buscas?" value="¿Qué buscas?" />
                <Picker.Item label="Prueba" value="prueba" />
              </Picker>
              <Picker
                //selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                <Picker.Item label="Operación" value="Operacion" />
                <Picker.Item label="Prueba" value="prueba" />
              </Picker>
              <Button
                style={{width: 10}}
                onPress={() => {}}
                title="Buscar"
                color="#F19700"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>

            {/*
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryLabel}>NOTICIAS INMOBILIARIAS</Text>
            </View>
            <View>
              <View style={styles.row}>
                <Card>
                  <CardTitle>
                    <Image
                      style={{height:200, width:200}}
                      source={require('./casa.png')}
                    />
                  </CardTitle>
                  <CardContent>
                    <Text style={{textAlign: 'center'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                  </CardContent>
                  <CardAction >
                    <Button
                      onPress={() => {}}
                      title="Leer más"
                      color="#F19700"
                      accessibilityLabel="Learn more about this purple button"
                    />
                  </CardAction>
                </Card>
              </View>
              <View style={styles.row}>
                <Card>
                  <CardTitle>
                  <Image
                    style={{height:200, width:200}}
                    source={require('./casa.png')}
                  />
                  </CardTitle>
                  <CardContent>
                    <Text style={{textAlign: 'center'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                  </CardContent>
                  <CardAction >

                    <Button
                      onPress={() => {}}
                      title="Leer más"
                      color="#F19700"
                      accessibilityLabel="Learn more about this purple button"
                    />
                  </CardAction>
                </Card>
              </View>
            </View>
            */}

            {/*PUBLICACIONES DESTACADAS*/}
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryLabel}>PUBLICACIONES</Text>
            </View>
            <View>
              {this.state.isLoadingPublications ? <Image style={{height:40, width:40}} source={require('./loading.gif')} /> : false}
              {this.state.publications.map((prop, key) => {
                 return (
                   <Publication key={key} data={prop} />
                 );
              })}
            </View>

            {/*AGENCIAS DESTACADAS*/}
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryLabel}>AGENCIAS DESTACADAS</Text>
            </View>
            <View>
              {this.state.isLoadingAgencies ? <Image style={{height:40, width:40}} source={require('./loading.gif')} /> : false}
              {this.state.agencies.map((prop, key) => {
                 return (
                   <Agency key={key} data={prop} />
                 );
              })}
            </View>
            <View style={{height: 95}}>
              <Footer />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}



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

var localStyles = StyleSheet.create({
  homeFiltroContainer: {
    padding: 40,
  },
  homeFiltroTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#F19700',
    fontWeight:'bold',


  },
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
