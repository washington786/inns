import {StyleSheet, Text, View,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react';
import {LottieView} from 'lottie-react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const PaymentSuccessfulScreen = () => {
  return (
    <SafeAreaProvider>
        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'white', height: height}}>
            {/* <LottieView source={require('../lottie files/paymentSuccess.json')} autoPlay loop />; */}
            {/* <Text>PaymentSuccessfulScreen</Text> */}
            <TouchableOpacity 
                // onPress={onSubmit}
                style={styles.button}>
                    <Text
                    style={styles.buttonText}>
                    Return To Home
                    </Text>
            </TouchableOpacity>
        </View>
        
    </SafeAreaProvider>
    
  )
}

export default PaymentSuccessfulScreen

const styles = StyleSheet.create({
    button : {
        backgroundColor: '#00A300',
        width:250,
        height:45,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
        borderRadius:5
    },
    buttonText : {
        fontSize: 15,
        color: '#fff',
        fontWeight:'bold',
        textTransform:'uppercase'
    }
})