import React from 'react'
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return <View style = {styles.viewStyle}>
        <Text style={styles.textOneStyle}> Child #1</Text>
        <Text style={styles.textTwoStyle}> Child #2</Text>
        <Text style={styles.textThreeStyle}> Child #3</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        alignItems: 'center'
  


    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        left: 40

    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        position: 'absolute',
        bottom: 10,
    
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        top: 10,

    

    },
});

export default BoxScreen;
