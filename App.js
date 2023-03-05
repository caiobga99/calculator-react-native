import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import { Botao } from './components/Botao';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <View style={styles.box}>
          <Text style={styles.result}>0</Text>
        </View>
        <View style={styles.backSpaceBox}>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/7156/7156272.png',
              }}
              style={styles.backSpace}
            />
          </TouchableOpacity>
        </View>
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
          <Botao value="x" type="operator" />
        </View>
        <View style={styles.row}>
          <Botao value={4} type="number" />
          <Botao value={5} type="number" />
          <Botao value={6} type="number" />
          <Botao value="-" type="operator" />
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  box: {
    width: '100%',
    height: '75%',
    // wordBreak: 'break-all',
  },
  backSpaceBox: {
    // width: 'fit-content',
    height: '25%',
  },
  result: {
    color: '#ffffff',
    textAlign: 'right',
    width: '97%',
    fontSize: 35,
    // height: 'max-content',
    // flexShrink: 1,
  },
  buttonsGroup: {
    height: '70%',
    width: '100%',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '.9%',
  },
  backSpace: {
    height: 50,
    width: 50,
  },
});
