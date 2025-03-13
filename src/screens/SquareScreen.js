import React, { useReducer } from 'react';
import { View, Button, StyleSheet,Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;
const MIN_VALUE = 0;
const MAX_VALUE = 255;

/**
 * Reducer function for managing RGB color state.
 * Follows React community conventions for reducers:
 * - Never mutates state directly
 * - Always returns a new state object
 * - Uses switch statement for action handling
 * - Has a default case to handle unknown actions
 * - Keeps logic simple and predictable
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
 * Implements community best practices for state management:
 * - Uses reducer pattern for complex state logic
 * - Separates state logic from UI components
 * - Implements bounds checking for RGB values (0-255)
 * - Provides clear visual feedback
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
                onIncrease={() => runMyReducer({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => runMyReducer({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color="Red"
            />
           <Text style={styles.textStyle}>Red: {red}</Text>
           <ColorCounter  
                onIncrease={() => runMyReducer({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => runMyReducer({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                color="Green"
            />
           <Text style={styles.textStyle}>Green: {green}</Text>
           <ColorCounter  
                onIncrease={() => runMyReducer({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => runMyReducer({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
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