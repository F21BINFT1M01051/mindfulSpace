import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../services/colors';
import LinearGradient from 'react-native-linear-gradient';
import NextButton from '../../components/NextButton';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const OnBoardingTwo = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/onBoarding1.png')}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Meditate</Text>

          {/* <LinearGradient
            colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
            style={styles.gradient}
          > */}
            <Text style={styles.description}>
              Take a deep breath, relax, and begin your journey to inner peace.
              Let each moment guide you towards calm and clarity!
            </Text>

            <NextButton title={'Next'} color={'rgba(146, 145, 224, 1)'} onPress={()=>navigation.navigate('OnBoardingThree') }/>


            {/* <TouchableOpacity style={styles.nextButton}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity> */}
          {/* </LinearGradient> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnBoardingTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    position: 'absolute',
    top: height * 0.65,
    width: '100%',
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 29,
    fontFamily: 'Poppins-Bold',
    color: COLORS.primaryText,
    marginBottom: 10,
  },
  gradient: {
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 19,
    color: COLORS.secondaryText,
    marginBottom: 20,
    fontFamily:'Poppins-Regular',
    marginVertical:10
  },
  nextButton: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.nextButton,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    color: 'rgba(146, 145, 224, 1)',
    fontFamily: 'Poppins-Bold',
  },
});
