import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoardingOne from '../screens/onboardingscreen/OnBoardingOne';
import OnBoardingTwo from '../screens/onboardingscreen/OnBoardingTwo';
import OnBoardingThree from '../screens/onboardingscreen/OnBoardingThree';
import OnBoardingFour from '../screens/onboardingscreen/OnBoardingFour';
import DashBoard from '../screens/homescreens/DashBoard';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='OnBoardingOne' component={OnBoardingOne} />
            <Stack.Screen name='OnBoardingTwo' component={OnBoardingTwo} />
            <Stack.Screen name='OnBoardingThree' component={OnBoardingThree} />
            <Stack.Screen name='OnBoardingFour' component={OnBoardingFour} />
            <Stack.Screen name='DashBoard' component={BottomNavigation} />



        </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default StackNavigation

const styles = StyleSheet.create({})