import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

/**
 * CounterScreen demonstrates basic state management in React Native using useState hook.
 * Provides buttons to increment and decrement a counter value.
 * 
 * Features:
 * - Uses useState hook for state management
 * - Shows how to update state safely
 * - Demonstrates button press handlers
 * - Displays current state value
 * 
 * @component
 * @returns {React.ReactElement} A screen with increment/decrement buttons and counter display
 */
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
