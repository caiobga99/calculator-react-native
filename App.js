import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';

import { Botao, BackspaceButton } from './components/Botao';

export default function App() {
  const [lastNumber, setLastNumber] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');

  const types = [
    'clear',
    'operator',
    'operator',
    'operator',
    'number',
    'number',
    'number',
    'operator',
    'number',
    'number',
    'number',
    'operator',
    'number',
    'number',
    'number',
    'operator',
    'operator',
    'number',
    'operator',
    'equal',
  ];

  const values = [
    'C',
    '()',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '+/-',
    '0',
    '.',
    '=',
  ];

  const calculator = () => {
    const splitNums = currentNumber.split(' ');
    const current = parseFloat(splitNums[0]);
    const operator = splitNums[1];
    const previous = parseFloat(splitNums[2]);
    switch (operator) {
      case '+':
        setCurrentNumber((current + previous).toString());
        return;

      case '-':
        setCurrentNumber((current - previous).toString());
        return;

      case 'x':
        setCurrentNumber((current * previous).toString());
        return;
      case '÷':
        if (previous === 0) return setCurrentNumber('Erro');
        setCurrentNumber((current / previous).toString());
        return;
    }
  };
  if (currentNumber.length >= 15) {
    console.log('Não é possivel inserir mais de 15 digitos');
  }
  const handleDisplay = (value) => {
    const currentNumberSplit = currentNumber.split(' ');
    const isOperator = currentNumberSplit[currentNumberSplit.length - 1] === '';

    if ((value === '+') | (value === '-') | (value === 'x') | (value === '÷')) {
      if (isOperator) return;
      setCurrentNumber(currentNumber + ' ' + value + ' ');
      return;
    }

    switch (value) {
      case '=':
        if (isOperator) return;
        setLastNumber(currentNumber + ' = ');
        calculator();
        return;
      case 'C':
        setCurrentNumber('');
        setLastNumber('');
        return;
      case 'DEL':
        if (isOperator) {
          setCurrentNumber(
            currentNumber.substring(0, currentNumber.length - 3)
          );
        } else {
          setCurrentNumber(
            currentNumber.substring(0, currentNumber.length - 1)
          );
        }
        return;
      case '%':
        return;
      case '()':
        return;
      case '+/-':
        return;
      case '.':
        if (currentNumber.includes('.')) return;
        if (isOperator) return;
        setCurrentNumber(currentNumber + value);
        return;
    }
    setCurrentNumber(currentNumber + value);
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.display}>
        <View style={styles.box}>
          <Text style={styles.historyText}>{lastNumber}</Text>
          <Text style={styles.result}>{currentNumber}</Text>
        </View>

        <View style={styles.backSpaceBox}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => handleDisplay('DEL')}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/7156/7156272.png',
              }}
              style={styles.backspace}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonsGroup}>
        {values.map((value, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleDisplay(value)}
              style={types[index] !== 'equal' ? styles.botao : styles.equal}>
              {types[index] === 'clear' && (
                <Text style={[styles.content, styles.clear]}>{value}</Text>
              )}
              {types[index] === 'operator' && (
                <Text style={[styles.content, styles.operator]}>{value}</Text>
              )}
              {types[index] === 'number' && (
                <Text style={[styles.content, styles.number]}>{value}</Text>
              )}
              {types[index] === 'equal' && (
                <Text style={styles.content}>{value}</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    widht: '100%',
    height: '70%',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
  },
  display: {
    width: '100%',
    height: '30%',
    borderBottomWidth: 1,
    borderBottomColor: '#222',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '15%',
  },
  box: {
    width: '100%',
    height: '75%',
    // wordBreak: 'break-all',
  },

  result: {
    color: '#ffffff',
    textAlign: 'right',
    width: '97%',
    fontSize: 35,
    // height: 'max-content',
    // flexShrink: 1,
  },
  historyText: {
    fontSize: 20,
    width: '97%',
    color: '#ffffff',
    textAlign: 'right',
  },
  buttonsGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backSpaceBox: {
    // width: 'fit-content',
    height: '25%',
  },
  backspace: {
    height: 50,
    width: 50,
  },
  /*row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '.9%',
  },
    width: 50,
  },*/
  botao: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height
      ) / 2,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2%',
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
    margin: '2%',
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
});
