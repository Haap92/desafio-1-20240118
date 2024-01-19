import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './src/components/Greeting';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting />
      <Text>Esto es un proyecto de prueba para React Native.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8D6D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#43FAA6'
  }
});
