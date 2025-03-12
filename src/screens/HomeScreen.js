import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

/**
 * HomeScreen serves as the main navigation hub of the application.
 * It provides buttons to navigate to all available demo screens.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object provided by React Navigation
 * @returns {React.ReactElement} A screen with navigation buttons to all demos
 */
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi there!</Text>

      <View style={styles.buttonContainer}>
        <Button title="Go to Components Demo" onPress={() => navigation.navigate('Components')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to List Demo" onPress={() => navigation.navigate('List')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to Image Demo" onPress={() => navigation.navigate('Image')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to Counter Demo" onPress={() => navigation.navigate('Counter')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to Color Demo" onPress={() => navigation.navigate('Color')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to Square Demo" onPress={() => navigation.navigate('Square')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default HomeScreen;
