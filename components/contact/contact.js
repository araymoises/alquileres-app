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
  Platform,Button
} from 'react-native';

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

  render(){
    return (
      <ScrollView
        pointerEvents="box-none"
        style={styles.scrollView}
        scrollEventThrottle={200}
        contentInset={{top: 0}}
        >
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Principal
          </Text>

          {/*<Button
            onPress={this.props.openDrawer}
            title="Open Drawer"
            />*/}

          {/*type*/}
          <Text style={styles.categoryLabel}>Noticias</Text>
          <View style={styles.row}>
            <View style={styles.col}>
              <Card>
                <CardTitle>
                  <Text style={style_card.title}>Noticia 1</Text>
                </CardTitle>
                <CardContent>
                  <Text>Contenido</Text>
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
            <View style={styles.col}>
              <Card>
                <CardTitle>
                  <Text style={style_card.title}>Noticia 2</Text>
                </CardTitle>
                <CardContent>
                  <Text>Contenido</Text>
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


          {/*side*/}
          <Text style={styles.categoryLabel}>Publicaciones</Text>
          <View style={styles.row}>
            <View style={styles.col}>
              <Card>
                <CardTitle>
                  <Text style={style_card.title}>Publicación 1</Text>
                </CardTitle>
                <CardContent>
                  <Text>Contenido</Text>
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
            <View style={styles.col}>
              <Card>
                <CardTitle>
                  <Text style={style_card.title}>Publicación 2</Text>
                </CardTitle>
                <CardContent>
                  <Text>Contenido</Text>
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
          {/*trigger options*/}
          <Text style={styles.categoryLabel}>Agencias Destacadas</Text>
          <View style={styles.row}>
            <View style={styles.col}>
              <Card>
                <CardTitle>
                  <Text style={style_card.title}>Agencia 1</Text>
                </CardTitle>
                <CardContent>
                  <Text>Contenido</Text>
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
            <View style={styles.col}>
              <Card>
                <CardTitle>
                  <Text style={style_card.title}>Agencia 2</Text>
                </CardTitle>
                <CardContent>
                  <Text>Contenido</Text>
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
        </View>
      </ScrollView>
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
