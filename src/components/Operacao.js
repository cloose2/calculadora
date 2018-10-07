import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  View
} from 'react-native';

export default class Operacao extends Component{


    render(){
        return(
            <Picker style={styles.operacao} 
            selectedValue={this.props.opx}
            onValueChange={(op)=>{this.props.atualizaOperacao(op)}}>
                <Picker.Item label='Soma' value = 'soma'/>
                <Picker.Item label='Subtração' value = 'sub'/>
                <Picker.Item label='Multiplicação' value = 'mul'/>
                <Picker.Item label='Divisão' value = 'div'/>
            </Picker>
    )}
}

const styles = StyleSheet.create({
    operacao:{
        marginTop:15,
        marginBottom:15
    }
});