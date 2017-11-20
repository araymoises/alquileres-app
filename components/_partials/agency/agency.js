import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Divider,
  PixelRatio,
  Image,
  Button,
  Modal,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class listAgencies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      isLoading: true,
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight activeOpacity={100} onPress={() => {
          this.setModalVisible(true)
          }}>
        <View>
          <View style={styles.row}>
            <Card>
              <CardTitle>
              {this.state.isLoading ? <Image style={{height:50, width:50}} source={require('./loading.gif')} /> : false}
                <Image
                  style={{height:200, width:200}}
                  source={{uri: 'https://alquileres-pisos.com/' + this.state.data.logo_route}}
                  onLoad={() => this.setState({isLoading: false})}
                />
              </CardTitle>
              <CardContent style={{flex: 1}}>
                <Text style={{textAlign: 'center', fontSize: 25, color: '#485A96'}}>{this.state.data.nombre}</Text>
                <Text style={{textAlign: 'left', fontSize: 15, color: '#F19700'}}>{this.state.data.url}</Text>
                <View style={{marginLeft: 10}}>
                  <Text style={{textAlign: 'left', fontSize: 12}}>Teléfono: {this.state.data.telefono}</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>correo: {this.state.data.correo}</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>Dirección: {this.state.data.direccion}</Text>
                </View>
              </CardContent>
              <CardAction >
                {/*<Button
                  onPress={() => {}}
                  title="Leer más"
                  color="#F19700"
                  accessibilityLabel="Learn more about this purple button"
                />*/}
              </CardAction>
            </Card>
          </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey'
  },
  row: {
    flexDirection: 'row',
    backgroundColor:'white',
    borderRadius: 0,
    borderWidth: 0,
    padding:0,
    borderTopWidth: 1 / PixelRatio.get(),
    borderColor: '#d6d7da',
    padding:10,
    alignItems: 'center'
  },
});
