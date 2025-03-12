import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

/**
 * ImageScreen demonstrates component reuse and props system in React Native.
 * Uses a custom ImageDetail component to display multiple images with titles and scores.
 * 
 * Features:
 * - Demonstrates component reusability
 * - Shows props passing (title, image source, and score)
 * - Illustrates parent-child component relationship
 * 
 * @component
 * @returns {React.ReactElement} A screen showing multiple image cards with details
 */
const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score={9} />
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score={7} />
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={4} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
