import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Numero from './Numero';

export default props => (
    <View style = {styles.visor}>
        <Numero num={props.num1} nome='num1' atualizaValor={props.atualizaValor}/>
        <Numero num={props.num2} nome='num2' atualizaValor={props.atualizaValor} />
    </View>
);

const styles = StyleSheet.create({
    visor:{
        flexDirection : 'row',
        justifyContent: 'space-between'
    }
})