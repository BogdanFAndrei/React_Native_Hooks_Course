import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

/**
 * ComponentsScreen demonstrates basic React Native component usage.
 * Shows how to use Text components, styling, and variable interpolation in JSX.
 * 
 * @component
 * @returns {React.ReactElement} A screen showing basic text styling and variable usage
 */
const ComponentsScreen = () => {
  const name = 'Bogdan';

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
