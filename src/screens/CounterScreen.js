import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

/**
 * Reducer function for managing counter state.
 * Follows React community conventions for reducers:
 * - Never mutates state directly
 * - Always returns a new state value
 * - Uses switch statement for action handling
 * - Has a default case to handle unknown actions
 * 
 * @param {number} state - Current counter value
 * @param {Object} action - Action object describing the counter change
 * @param {string} action.type - Type of action ('increment' or 'decrement')
 * @returns {number} New counter value
 */
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

/**
 * CounterScreen demonstrates state management in React Native using useReducer hook.
 * Provides buttons to increment and decrement a counter value.
 * 
 * Features:
 * - Uses useReducer for state management
 * - Shows how to update state safely
 * - Demonstrates button press handlers
 * - Displays current state value
 * 
 * @component
 * @returns {React.ReactElement} A screen with increment/decrement buttons and counter display
 */
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <View>
      <Button
        style={styles.buttonContainer}
        title="Increase"
        onPress={() => dispatch({ type: 'increment' })}
      />
      <Button
        style={styles.buttonContainer}
        title="Decrease"
        onPress={() => dispatch({ type: 'decrement' })}
      />

      <Text style={styles.text}>Current Counter {state}</Text>
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
