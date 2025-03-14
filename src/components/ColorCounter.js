import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease, setColor }) => {
    return (
        <View>
            <Text style={styles.textStyle}>{color}</Text>
            <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
            <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
       </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});
export default ColorCounter;
