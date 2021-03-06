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
  Image
} from 'react-native';

import Header from './../_partials/header/header';
import Footer from './../_partials/footer/footer';
import Publication from './../_partials/publication/publication';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';
import styles from './../../styles';
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

export default class MyMainView extends Component {
  setParentState(args){
    this.props.setParentState(args)
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      publications: new Array()
    }
  }

  getData(){
    return fetch('https://alquileres-pisos.com/rest/search/?limit=8&offset=0', {
      method: 'GET',
    headers: {
      'api-key': '$2y$10$HNKLFs5FUQCVnzHbVH18O.hovhZaRHorsm29rmaQbA4TPKmp0qTeu'
    }}
    )
    .then((data) => data.json())
    .then((dataJson) => {
      this.setState({
          publications: dataJson.publications,
          isLoading: false
        }, function() {
          // do something with new state
        });
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
            <View style={localStyles.breadcrumb}>
              <Text>inicio / Publicaciones</Text>
            </View>
            {this.state.isLoading ? <Image style={{height:40, width:40}} source={require('./loading.gif')} /> : false}
            {this.state.publications.map((prop, key) => {
               return (
                 <Publication key={key} data={prop} />
               );
            })}
            <View style={{height: 95}}>
              <Footer />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

var localStyles = StyleSheet.create({
  breadcrumb: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    height: 60,
    margin: 5,
    padding: 5
  },
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
