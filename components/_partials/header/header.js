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

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component{
  render() {
    return(
      <View style={localStyles.container}>
        <Text style={styles.logo}>
        <Image
          source={require('./logo-negativo.png')}
        />
        </Text>
        <TouchableHighlight onPress={this._onPressButton} style={styles.tabIcon}>
          <Icon name="navicon" size={40} color="#F19700" />
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton} style={styles.tabIcon}>
          <Icon name="user" size={40} color="#F19700" />
        </TouchableHighlight>
      </View>
    )
  }
}

var localStyles = StyleSheet.create({
  container: {
    padding: 8,
    paddingRight: 0,
    flexDirection: 'row',
    backgroundColor: '#485A96'
  }
});
