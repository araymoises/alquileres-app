import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import * as actions from './actions';
import {connect} from 'react-redux';

class SuperheroesList extends Component {
  getSuperheroes(){
    const {superheroes} = this.props;
    return superheroesData = superheroes.map((heroes, key) =>{
      return <Text key={key}>{heroes.superhero}</Text>
    });
  }
  render(){
    console.log(this.props);
    console.log(this.state);
    return(
      <View>
        {this.getSuperheroes()}
        <Button
          onPress={() => this.props.selected_tab('TAB_1')}
          title="Botón #1" />
        <Button
          onPress={() => this.props.selected_tab('TAB_2')}
          title="Botón #2" />
        <Button
          onPress={() => this.props.selected_tab('TAB_3')}
          title="Botón #3" />
        <Button
          onPress={() => alert(this.props.selected_tab)}
          title="Resultado" />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    superheroes: state.superheroes,
    //tabsId: state.tabId
  }
}

export default connect(mapStateToProps)(SuperheroesList)
