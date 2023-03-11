import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import { useState } from 'react';

/*
ERROS
Não é possivel inserir mais de 15 digitos.
NUMERO / 0 = Erro
*/
export const Botao = ({ type, value }) => {
  // const [display, setDisplay] = useState(value);

  // const handleClickUpdateDisplay = (value) => {
  //   setDisplay(value);
  //   console.log(display);
  // };

  return (
    <TouchableOpacity
      onPress={() => handleClickUpdateDisplay(value)}
      activeOpacity={0.8}
      style={type !== 'equal' ? styles.botao : styles.equal}>
      {type === 'clear' && (
        <Text style={[styles.content, styles.clear]}>{value}</Text>
      )}
      {type === 'operator' && (
        <Text style={[styles.content, styles.operator]}>{value}</Text>
      )}
      {type === 'number' && (
        <Text style={[styles.content, styles.number]}>{value}</Text>
      )}
      {type === 'equal' && <Text style={styles.content}>{value}</Text>}
    </TouchableOpacity>
  );
};

export const BackspaceButton = ({ value }) => {
  return (
    <View style={styles.backSpaceBox}>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/7156/7156272.png',
          }}
          style={styles.backspace}
        />
      </TouchableOpacity>
    </View>
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
  backSpaceBox: {
    // width: 'fit-content',
    height: '25%',
  },
  backspace: {
    height: 50,
    width: 50,
  },
});
