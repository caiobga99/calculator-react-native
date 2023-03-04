import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { Botao } from './components/Botao';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.result}>1 + 1</Text>
      </View>
      <View style={styles.buttonsGroup}>
        <View style={styles.row}>
          <Botao value="C" type="clear" />
          <Botao value="()" type="operator" />
          <Botao value="%" type="operator" />
          <Botao value="÷" type="operator" />
        </View>
        <View style={styles.row}>
          <Botao value={7} type="number" />
          <Botao value={8} type="number" />
          <Botao value={9} type="number" />
          <Botao value="×" type="operator" />
        </View>
        <View style={styles.row}>
          <Botao value={4} type="number" />
          <Botao value={5} type="number" />
          <Botao value={6} type="number" />
          <Botao value="—" type="operator" />
        </View>
        <View style={styles.row}>
          <Botao value={1} type="number" />
          <Botao value={2} type="number" />
          <Botao value={3} type="number" />
          <Botao value="+" type="operator" />
        </View>
        <View style={styles.row}>
          <Botao value="+/-" type="number" />
          <Botao value={0} type="number" />
          <Botao value="," type="number" />
          <Botao value="=" type="equal" />
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    color: '#ffffff',
    textAlign: 'right',
    width: '90%',
    fontSize: 35,
  },
  buttonsGroup: {
    height: '70%',
    width: '100%',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '.6%',
  },
});
