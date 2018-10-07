import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default props =>(
            <View>
                <TextInput style = {styles.input}
                placeholder="Resultado"
                editable={false}
                value = {props.resultado}
                />
            </View>
    );



const styles = StyleSheet.create({
    input:{
        height:100,
        fontSize:30
    }

});