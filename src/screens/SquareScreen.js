import React, { useReducer } from 'react';
import { View, Button, StyleSheet,Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;
const MIN_VALUE = 0;
const MAX_VALUE = 255;

/**
 * Reducer function for managing RGB color state.
 * Handles color value updates while maintaining state immutability.
 * Ensures color values stay within valid RGB range (0-255).
 * 
 * @param {Object} state - Current state object containing RGB values
 * @param {Object} action - Action object describing the color change
 * @param {string} action.colorToChange - Color to modify ('red', 'green', or 'blue')
 * @param {number} action.amount - Amount to change the color by
 * @returns {Object} New state object with updated color values
 */
const reducer = (state, action) => {
    // state === {red:number, green: number, blue:number}
    // action === { colorToChange : 'red' || 'green'|| 'blue', amount: 15 || -15  }
    
    switch (action.colorToChange) {
        case 'red':
            return {
                ...state,
                red: Math.min(MAX_VALUE, Math.max(MIN_VALUE, state.red + action.amount))
            };
        case 'green':
            return {
                ...state,
                green: Math.min(MAX_VALUE, Math.max(MIN_VALUE, state.green + action.amount))
            };
        case 'blue':
            return {
                ...state,
                blue: Math.min(MAX_VALUE, Math.max(MIN_VALUE, state.blue + action.amount))
            };
        default:
            return state;
    }
}

/**
 * SquareScreen demonstrates advanced state management using useReducer hook.
 * Allows users to adjust RGB values to create custom colors.
 * 
 * Features:
 * - Uses useReducer for complex state management
 * - Demonstrates component composition with ColorCounter
 * - Shows real-time color preview
 * - Implements bounds checking for RGB values (0-255)
 * 
 * @component
 * @returns {React.ReactElement} A screen with RGB adjustment controls and color preview
 */
const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;
    
    return (    
        <View>
           <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color="Red"
            />
           <Text style={styles.textStyle}>Red: {red}</Text>
           <ColorCounter  
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                color="Green"
            />
           <Text style={styles.textStyle}>Green: {green}</Text>
           <ColorCounter  
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                color="Blue"
            />
           <Text style={styles.textStyle}>Blue: {blue}</Text>
           <View style={{ 
               height: 150, 
               width: 150, 
               backgroundColor: `rgb(${red}, ${green}, ${blue})`,
               marginTop: 20,
               borderWidth: 2,
               borderColor: '#000'
           }} />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginLeft: 10
    }
});

export default SquareScreen;