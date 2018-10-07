import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  Button,
  TextInput,
  View
} from 'react-native';

export default props => (
    <Button title='Calcular' onPress={props.acao}/>
);
