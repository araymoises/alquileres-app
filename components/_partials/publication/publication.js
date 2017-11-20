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

export default class listPublications extends Component {
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
          <Modal
            animationType="fade"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => { this.setModalVisible(!this.state.modalVisible) }}
            >
            <ScrollView
              pointerEvents="box-none"
              style={styles.scrollView}
              scrollEventThrottle={200}
              contentInset={{top: 0}}
              >
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

                  <Text style={{textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: '#485A96'}}>Precio:</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>{this.state.data.price}€</Text>

                  <Text style={{textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: '#485A96'}}>Descripción:</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>{this.state.data.comment}</Text>

                  <Text style={{textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: '#485A96'}}>Área:</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>{this.state.data.area},00m²</Text>

                  <Text style={{textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: '#485A96'}}>Nro. de Habitaciones:</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>{this.state.data.n_rooms}</Text>

                  <Text style={{textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: '#485A96'}}>Nro. de Baños:</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>{this.state.data.n_bathrooms}</Text>

                  <Text style={{textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: '#485A96'}}>Ubicación:</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>{this.state.data.address}</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>Municipio - {this.state.data.municipio}</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>Código Postal - ?</Text>

                  <Text style={{textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: '#485A96'}}>Tipo de Oferta:</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>{this.state.data.oferta}</Text>

                  <Text style={{textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: '#485A96'}}>Tipo de Inmueble:</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>{this.state.data.tipo}</Text>

                  <Text style={{textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: '#485A96'}}>Estado del Inmueble:</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>{this.state.data.estadoInmueble}</Text>

                  <Text style={{textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: '#485A96'}}>Empresa:</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>?</Text>

                  <Text style={{textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: '#485A96'}}>Teléfono:</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>?</Text>

                  <Text style={{textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: '#485A96'}}>Código de Publicación:</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>{this.state.data.codigo_pub}</Text>

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
            </ScrollView>
          </Modal>

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
                  <Text style={{textAlign: 'left', fontSize: 12}}>Nro. de Habitaciones: {this.state.data.n_rooms}</Text>
                  <Text style={{textAlign: 'left', fontSize: 12}}>Nro. de Baños: {this.state.data.n_bathrooms}</Text>
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
