import React, { useState } from 'react';
import { View, Button, StyleSheet,Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;
const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    
    return (    
        <View>
           <ColorCounter color="Red" 
                onIncrease={() => setRed(red + COLOR_INCREMENT)} 
                onDecrease={() => setRed(red - COLOR_INCREMENT)} 
                color={"Red"} 
            />
           <ColorCounter color="Green" 
                onIncrease={() => setGreen(green + COLOR_INCREMENT)} 
                onDecrease={() => setGreen(green - COLOR_INCREMENT)} 
                color={"Green"}
             />
           <ColorCounter color="Blue" 
                onIncrease={() => setBlue(blue + COLOR_INCREMENT)} 
                onDecrease={() => setBlue(blue - COLOR_INCREMENT)} 
                color={"Blue"} 
            />
           <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    );
};



const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});
export default SquareScreen;