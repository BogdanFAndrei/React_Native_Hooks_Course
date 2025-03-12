import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorScreen = () => {
    return (
        <View>
            <Button title="Add a Color" onPress={() => {
                console.log('Color button pressed');
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    
})

export default ColorScreen;