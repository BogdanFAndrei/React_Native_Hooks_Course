import React, { useReducer } from 'react';
import { View, Button, StyleSheet,Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
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
    // action === { type : 'change_red' || 'change_green'|| 'change_blue', payload: 15 || -15  }
    
    switch (action.type) {
        case 'change_red':
            return {
                ...state,
                red: Math.min(MAX_VALUE, Math.max(MIN_VALUE, state.red + action.payload))
            };
        case 'change_green':
            return {
                ...state,
                green: Math.min(MAX_VALUE, Math.max(MIN_VALUE, state.green + action.payload))
            };
        case 'change_blue':
            return {
                ...state,
                blue: Math.min(MAX_VALUE, Math.max(MIN_VALUE, state.blue + action.payload))
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
    const [state, runMyReducer] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;
    
    return (    
        <View>
           <ColorCounter 
                onIncrease={() => runMyReducer({ type: 'change_red', payload: COLOR_INCREMENT })}
                onDecrease={() => runMyReducer({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
                color="Red"
            />
           <Text style={styles.textStyle}>Red: {red}</Text>
           <ColorCounter  
                onIncrease={() => runMyReducer({ type: 'change_green', payload: COLOR_INCREMENT })}
                onDecrease={() => runMyReducer({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
                color="Green"
            />
           <Text style={styles.textStyle}>Green: {green}</Text>
           <ColorCounter  
                onIncrease={() => runMyReducer({ type: 'change_blue', payload: COLOR_INCREMENT })}
                onDecrease={() => runMyReducer({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
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