import { Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useState } from 'react';

/*
ERROS
Não é possivel inserir mais de 15 digitos.
NUMERO / 0 = Erro
*/
export const Botao = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={props.type !== 'equal' ? styles.botao : styles.equal}>
      {props.type === 'clear' && (
        <Text style={[styles.content, styles.clear]}>{props.value}</Text>
      )}
      {props.type === 'operator' && (
        <Text style={[styles.content, styles.operator]}>{props.value}</Text>
      )}
      {props.type === 'number' && (
        <Text style={[styles.content, styles.number]}>{props.value}</Text>
      )}
      {props.type === 'equal' && (
        <Text style={styles.content}>{props.value}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height
      ) / 2,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
  clear: {
    color: '#f53030',
  },
  operator: {
    color: '#76c639',
  },
  number: {
    color: '#fff',
  },
  equal: {
    color: '#fff',
    backgroundColor: '#76c639',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height
      ) / 2,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
