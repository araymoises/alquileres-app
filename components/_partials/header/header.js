import React, { Component } from 'react';

import {
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
  StyleSheet,
  Navigator
} from 'react-native';

import styles from './../../../styles';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component{
  constructor(props) {
    super(props);

    this.state = {
      dropdownOptions: false
    };
  }

  onButtonPress = (idx, value) => {
    this.setState({
      dropdownOptions: !this.state.dropdownOptions,
    });

    //if (this.state.dropdownOptions) {
      alert(idx + " : " + value);
    //}
  }

  render() {
    return(
      <View style={localStyles.container}>
        <Text style={localStyles.logo}>
          <Image
            source={require('./logo-negativo.png')}
          />
        </Text>
        {/*
        <ModalDropdown
          options={['Inicio', 'Publicar Gratis', 'Contáctanos']}
          onSelect={(idx, value) => this.onButtonPress(idx, value)}
          style={styles.tabIcon}
          >
          <Icon name="navicon" size={40} color="#F19700" />
        </ModalDropdown>
        */}
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
  },
  logo: {
    flexDirection: 'column',
    flex: 3,
    margin: 5
  },
});
