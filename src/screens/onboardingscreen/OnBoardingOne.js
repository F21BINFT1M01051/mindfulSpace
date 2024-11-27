import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {COLORS} from '../../services/colors'

const OnBoardingOne = () => {
    const navigation = useNavigation();
    setTimeout(() => {
        navigation.navigate('OnBoardingTwo')
    }, 5000);

  return (
    <View>
        
        <ImageBackground source={require('../../assets/images/onBoarding1.png')} resizeMode='cover' style={{width:'100%', height:'100%'}} >
        <View style={{alignSelf:'center', top:300}}>
            <Text style={{color:COLORS.primaryText, fontSize:39, fontFamily:'Montserrat-Regular'}}>Mindful Space</Text>
        </View>
        </ImageBackground>  
    </View>
  )
}

export default OnBoardingOne

const styles = StyleSheet.create({})