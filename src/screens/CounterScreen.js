import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        style={styles.buttonContainer}
        title="Increase"
        onPress={() => setCounter(counter + 1)}
      />
      <Button
        style={styles.buttonContainer}
        title="Decrease"
        onPress={() => setCounter(counter - 1)}
      />

      <Text style={styles.text}>Current Counter {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default CounterScreen;
