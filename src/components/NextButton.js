import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import React from 'react';
const { width, height } = Dimensions.get('window');
import { COLORS } from '../services/colors';

const NextButton = (props) => {
    return (
        <TouchableOpacity style={styles.nextButton} onPress={props.onPress}>
            <Text style={[styles.nextButtonText, { color: props.color }]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default NextButton

const styles = StyleSheet.create({
    nextButton: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.nextButton,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        top:10
    },
    nextButtonText: {
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
    },
})