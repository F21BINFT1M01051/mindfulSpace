import { StyleSheet, Text, View, ImageBackground, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../../services/colors';

const DashBoard = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
            <ImageBackground
                source={require('../../assets/images/onBoarding1.png')}
                resizeMode='cover'
                style={{ width: '100%', height: '100%' }}
            >
                <View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/drawer.png')} resizeMode='contain' style={{width:30, height:30}} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{color : COLORS.primaryText , fontFamily:'Poppins-Medium', fontSize:18}}>
                            Mindful Space 
                            </Text>
                        </View>
                        <View>
                        <Image source={require('../../assets/images/profile.png')} resizeMode='contain' style={{width:30, height:30}} borderRadius={20} />

                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default DashBoard;

const styles = StyleSheet.create({});
