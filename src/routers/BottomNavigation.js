import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashBoard from '../screens/homescreens/DashBoard';
import Gratitude from '../screens/homescreens/Gratitude';
import Meditate from '../screens/homescreens/Meditate';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='Home' component={DashBoard} />
        <Tab.Screen name='Gratitude' component={Gratitude} />
        <Tab.Screen name='Meditate' component={Meditate} />

    </Tab.Navigator>
   
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})