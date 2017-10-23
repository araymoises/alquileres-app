import React, { Component } from 'react';

import {
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import styles from './../../../styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconZocial from 'react-native-vector-icons/Zocial';

export default class Footer extends Component{
  render() {
    return(
      <View style={localStyles.container}>
        <View style={{flexDirection: 'row', flex: 1, paddingTop:10, paddingRight:20, paddingLeft:20}}>
          <TouchableHighlight onPress={this._onPressButton} style={styles.tabIcon}>
            <IconFontAwesome name="facebook" size={25} color="#fff" />
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton} style={styles.tabIcon}>
            <IconFontAwesome name="twitter" size={25} color="#fff" />
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton} style={styles.tabIcon}>
            <IconIonicons name="logo-instagram" size={25} color="#fff" />
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton} style={styles.tabIcon}>
            <IconIonicons name="logo-googleplus" size={25} color="#fff" />
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton} style={styles.tabIcon}>
            <IconZocial name="email" size={25} color="#fff" />
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', flex: 1, paddingTop:10, paddingBottom:30}}>
          <IconFontAwesome name="copyright" size={15} color="#fff" />
          <Text style={{color: '#fff', paddingLeft:5}}>
              Copyright 2017 - Alquiler de Pisos
          </Text>
        </View>
      </View>
    )
  }
}

var localStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 0,
    backgroundColor: '#485A96'
  }
});
