import React, { useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';

/**
 * ColorScreen demonstrates array state management and FlatList rendering.
 * Generates and displays random color squares in a grid layout.
 * 
 * Features:
 * - Uses useState for array state management
 * - Demonstrates array spread operator for state updates
 * - Shows dynamic style generation
 * - Uses FlatList for efficient rendering
 * 
 * @component
 * @returns {React.ReactElement} A screen with a button to generate colors and a grid of color squares
 */
const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    
    return (
        <View>
            <Button title="Add a Color" onPress={()=>{
                setColors([...colors, randomRgb()]);
            }}/>
             
               
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({ item }) => {
                    return <View  style={{ height: 100, width: 100, backgroundColor: item }}  />
                }}
            />
        </View>
    );
};

/**
 * Generates a random RGB color string.
 * 
 * @returns {string} A CSS RGB color string (e.g., 'rgb(255, 128, 0)')
 */
const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
};

const styles = StyleSheet.create({
    
})

export default ColorScreen;