import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default props => (
    <TextInput style={styles.numero} 
    onChangeText={(valor)=>props.atualizaValor(valor,props.nome)} 
    value={props.num} />
);

const styles = StyleSheet.create({
    numero : {
        width:180,
        height:80,
        fontSize:20
    }
});