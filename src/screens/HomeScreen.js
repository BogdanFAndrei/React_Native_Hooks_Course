import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

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
