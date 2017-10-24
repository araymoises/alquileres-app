import React, { Component } from 'react';

import {
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
  StyleSheet,
  Linking
} from 'react-native';

import styles from './../../../styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconZocial from 'react-native-vector-icons/Zocial';

export default class Footer extends Component{
  render() {
    return(
      <View style={localStyles.container}>
        <View style={{flexDirection: 'row', paddingTop:10, paddingRight:20, paddingLeft:20}}>
          <TouchableHighlight onPress={ ()=>{ Linking.openURL('https://www.facebook.com/Alquilerdepisosycasas-1576487502423886/')}} style={styles.tabIcon}>
            <IconFontAwesome name="facebook" size={25} color="#fff" />
          </TouchableHighlight>
          <TouchableHighlight onPress={ ()=>{ Linking.openURL('https://twitter.com/alquipisosycasa')}} style={styles.tabIcon}>
            <IconFontAwesome name="twitter" size={25} color="#fff" />
          </TouchableHighlight>
          <TouchableHighlight onPress={ ()=>{ Linking.openURL('https://www.instagram.com/alquilerdepisosycasas/')}} style={styles.tabIcon}>
            <IconIonicons name="logo-instagram" size={25} color="#fff" />
          </TouchableHighlight>
          <TouchableHighlight onPress={ ()=>{ Linking.openURL('https://plus.google.com/u/0/109712210960165396538')}} style={styles.tabIcon}>
            <IconIonicons name="logo-googleplus" size={25} color="#fff" />
          </TouchableHighlight>
          <TouchableHighlight onPress={ ()=>{ Linking.openURL('mailto:araymoises55@gmail.com?subject=subject')}} style={styles.tabIcon}>
            <IconZocial name="email" size={25} color="#fff" />
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', paddingTop:10, paddingBottom:30}}>
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
