import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Divider,
  PixelRatio,
  Image,
  Button,
} from 'react-native';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class listPublications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      isLoading: true,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Card>
            <CardTitle>
            {this.state.isLoading ? <Image style={{height:50, width:50}} source={require('./loading.gif')} /> : false}
              <Image
                style={{height:200, width:200}}
                source={{uri: 'https://alquileres-pisos.com/imgPublications/' + this.state.data.preview}}
                onLoad={() => this.setState({isLoading: false})}
              />
            </CardTitle>
            <CardContent style={{flex: 1}}>
              <Text style={{textAlign: 'center', fontSize: 25, color: '#485A96'}}>{this.state.data.oferta} de {this.state.data.tipo}</Text>
              <Text style={{textAlign: 'center', fontSize: 25, color: '#F19700'}}>{this.state.data.price}€</Text>
              <Text style={{textAlign: 'left', fontSize: 15, color: '#485A96'}}>{this.state.data.user}</Text>
              <Text style={{textAlign: 'left', fontSize: 12, fontWeight: 'bold'}}>{this.state.data.municipio}, {this.state.data.provincia}.</Text>
              <View style={{marginLeft: 10}}>
                <Text style={{textAlign: 'left', fontSize: 12}}>Área: {this.state.data.area},00m²</Text>
                <Text style={{textAlign: 'left', fontSize: 12}}>Nro de Habitaciones: {this.state.data.n_rooms}</Text>
                <Text style={{textAlign: 'left', fontSize: 12}}>Nro de Baños: {this.state.data.n_bathrooms}</Text>
                <Text style={{textAlign: 'left', fontSize: 12}}>Tipo de Oferta: {this.state.data.oferta}</Text>
                <Text style={{textAlign: 'left', fontSize: 12}}>Tipo de Inmueble: {this.state.data.tipo}</Text>
                <Text style={{textAlign: 'left', fontSize: 12}}>Estado del Inmueble: {this.state.data.estadoInmueble}</Text>
                <Text style={{textAlign: 'left', fontSize: 12}}>Código del Inmueble: {this.state.data.codigo_pub}</Text>
              </View>
              <Text style={{textAlign: 'left', fontSize: 10}}><Icon name="thumbs-o-up" size={12} /> {this.state.data.countLike}  <Icon name="calendar" size={12} /> {this.state.data.date}</Text>
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
