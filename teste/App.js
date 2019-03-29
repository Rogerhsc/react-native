/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {

  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,

} from 'react-native';

class Classe extends Component{
  render(){
    return(
      <View>
        <Text>{this.props.teste}</Text>
      </View>
    )
  }
}


export default class App extends Component {
  constructor(props){

    super(props);
    this.state = { texto : 'Texto a Ser substituido' }; 
    
  }

  alteraTexto(){
    this.setState({ texto : 'Outra Coisa'});
  }
  render() {
    return (
      <View style={styles.container}>
        <Classe teste={this.state.texto}>Teste</Classe>
        <TouchableOpacity title='Botão' style={styles.botaoTouch} onPress={() => {this.alteraTexto()}}>
          <Text style={styles.textBotao}>Clique Aqui</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
  },
  botaoTouch:{
    backgroundColor: '#000000',
    alignItems: 'center',
    padding: 12,
    marginTop: 14,
  },
  textBotao:{
    color: '#FFFFFF',
    fontWeight: 'bold',
  } 
});
