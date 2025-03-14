import React from 'react'
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return <View style = {styles.viewStyle}>

        <View style={styles.BoxOneStyle}> </View>
        <View style={styles.BoxTwoStyle}> </View>
        <View style={styles.BoxThreeStyle}> </View>

    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        alignItems: 'center'
  


    },
    BoxOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        position: 'absolute',
        left: 0,


    },
    BoxTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
        position: 'absolute',
        right: 0

    
    },
    BoxThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green', 
        top: 50


    

    },
});

export default BoxScreen;
