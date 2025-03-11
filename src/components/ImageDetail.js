import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({imageSource, title, score}) => {
  return (
    <View 
      style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.score}>Image Score- {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  score: {
    color: '#666',
    marginTop: 3,
  },
});

export default ImageDetail;
