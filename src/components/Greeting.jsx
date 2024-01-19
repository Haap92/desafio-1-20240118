import { View, Text } from 'react-native'
import React from 'react'

const Greeting = () => {
  return (
    <View>
      <Text style={styles.text}>Hola Coder!!</Text>
    </View>
  )
}

const styles = {
  text: {
    backgroundColor: '#43FAA6'
  }
};

export default Greeting
