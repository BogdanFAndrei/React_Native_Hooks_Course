import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

/**
 * ListScreen demonstrates the usage of FlatList component in React Native.
 * Shows how to render a scrollable list of items with consistent styling.
 * 
 * Features:
 * - Uses FlatList for efficient list rendering
 * - Demonstrates key extraction
 * - Shows how to style list items
 * - Handles both horizontal and vertical scroll indicators
 * 
 * @component
 * @returns {React.ReactElement} A screen showing a list of friends with their ages
 */
const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: '20' },
    { name: 'Friend #2', age: '21' },
    { name: 'Friend #3', age: '22' },
    { name: 'Friend #4', age: '23' },
    { name: 'Friend #5', age: '24' },
    { name: 'Friend #6', age: '25' },
    { name: 'Friend #7', age: '26' },
    { name: 'Friend #8', age: '27' },
    { name: 'Friend #9', age: '28' },
  ];
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // element === {item: {name: "Friend #1", age: 20}, index: 0}
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 10,
  },
});

export default ListScreen;
