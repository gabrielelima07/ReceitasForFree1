import { Image } from 'expo-image';
import {  StyleSheet,View,Text } from 'react-native';


export default function TelaInicial() {
  return ( 
    <View>
      <Text>
         
      </Text>
    </View>
   )


}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
