/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,

} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

class Icone extends Component {
  render() {
    var escolha = this.props.escolha
    if (escolha == 'Pedra') {
      return (
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Text>{this.props.jogador}</Text>
          <Image source={require('./imgs/pedra.png')}></Image>
        </View>
      );
    } else if (escolha == 'Papel') {
      return (
        <View style={{alignItems: 'center'}}>
          <Text>{this.props.jogador}</Text>
          <Image source={require('./imgs/papel.png')}></Image>
        </View>

      );
    } else if (escolha == 'Tesoura') {
      return (
        <View style={{alignItems: 'center'}}>
          <Text>{this.props.jogador}</Text>
          <Image source={require('./imgs/tesoura.png')}></Image>
        </View>

      );
    } else {
      return false;
    }
  }
}

class Topo extends Component {
  render() {
    return (
      <View style={styles.Topo}>
        <Image source={require('./imgs/jokenpo.png')} style={styles.Topo}></Image>
      </View>
    );
  }
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: '', escolhaMaquina: '', resultado: '' };
  }


  jokenPo(escolhaUsuario) {
    var numAleatorio = Math.floor(Math.random() * 3);

    var escolhaMaquina = '';

    switch (numAleatorio) {
      case 0: escolhaMaquina = 'Pedra'; break;
      case 1: escolhaMaquina = 'Papel'; break;
      case 2: escolhaMaquina = 'Tesoura'; break;
    }

    var resultado = '';

    if (escolhaMaquina == 'Pedra') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Empate';
      } if (escolhaUsuario == 'Papel') {
        resultado = 'Ganhou';
      } if (escolhaUsuario == 'Tesoura') {
        resultado = 'Perdeu'
      }
    } else if (escolhaMaquina == 'Papel') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Perdeu';
      } if (escolhaUsuario == 'Papel') {
        resultado = 'Empate';
      } if (escolhaUsuario == 'Tesoura') {
        resultado = 'Ganhou'
      }
    } else if (escolhaMaquina == 'Tesoura') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Ganhou';
      } if (escolhaUsuario == 'Papel') {
        resultado = 'Perdeu';
      } if (escolhaUsuario == 'Tesoura') {
        resultado = 'Empate'
      }
    }
    this.setState({ escolhaUsuario: escolhaUsuario, escolhaMaquina: escolhaMaquina, resultado: resultado });
  }

  render() {
    return (
      <View style={styles.container}>
        <Topo></Topo>

        <View style={styles.Middle}>
          <View style={styles.buttonChose}>
            <TouchableOpacity style={styles.botaoTouch} title="Pedra" onPress={() => { this.jokenPo('Pedra') }}>
              <Text style={styles.textBotao}>Pedra</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonChose}>
            <TouchableOpacity style={styles.botaoTouch} title="Papel" onPress={() => { this.jokenPo('Papel') }}>
              <Text style={styles.textBotao}>Papel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonChose}>
            <TouchableOpacity style={styles.botaoTouch} title="Tesoura" onPress={() => { this.jokenPo('Tesoura') }}>
              <Text style={styles.textBotao}>Tesoura</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Botton}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaMaquina} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Usuario'></Icone>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  botaoTouch: {
    backgroundColor: '#160ce7',
    alignItems: 'center',
    padding: 12,
  },
  textBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  Topo: {
    width: deviceWidth,
    marginTop: 0,
  },
  buttonChose: {
    width: 138,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  Middle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Botton: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 15,
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ff0000',
    height: 60,
  }
});
