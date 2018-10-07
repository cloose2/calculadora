import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Topo from './src/components/Topo';
import {Painel} from './src/components/Painel';
import Resultado from './src/components/Resultado';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={num1:'',num2:'',operacao:'soma',resultado:''};
    this.calcular = this.calcular.bind(this); //fazer com que a funcao fique no atual arquivo
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao= this.atualizaOperacao.bind(this);
  }
  calcular(){
    let resultado = 0;
    switch(this.state.operacao){
        case 'soma':
        resultado = parseFloat(this.state.num1)+parseFloat(this.state.num2)
        break;
        case 'sub':
        resultado = parseFloat(this.state.num1)-parseFloat(this.state.num2)
        break;
        case 'mul':
        resultado = parseFloat(this.state.num1)*parseFloat(this.state.num2)
        break;
        case 'div':
        resultado = parseFloat(this.state.num1)/parseFloat(this.state.num2)
        break;
        default:
        resultado=0;
    }
    this.setState({resultado:resultado.toString()});
}

atualizaValor(numero,nome){
    const obj = {};
    obj[nome]=numero;
    this.setState(obj);
}
atualizaOperacao(operacao){
    this.setState({operacao:operacao});
}

  render() {
    return (
      <View>
      	<Topo/>
        <Resultado resultado={this.state.resultado}/>
        <Painel
        num1={this.state.num1}
        num2={this.state.num2}
        operacao={this.state.operacao}
        calcular={this.calcular}
        atualizaOperacao={this.atualizaOperacao}
        atualizaValor={this.atualizaValor}/>
      </View>
    );
  }

}




