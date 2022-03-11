import {StyleSheet, Text, View,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react';
import {LottieView} from 'lottie-react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const PaymentSuccessfulScreen = ({navigation}) => {
  return (
    <SafeAreaProvider>
        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'white', height: height}}>
        <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', padding:15, left: 0, top:10}}>

            <Icon
                    color='#17C828'
                    name='check-circle'
                    type='font-awesome'
                    size={90}
                />

            <Text style={{fontSize:16, fontWeight: '900',letterSpacing: 2,textAlign:'center'}}>Payment Successful</Text>
            <Text style={{fontSize:11, fontWeight: '200',letterSpacing: 2, textAlign:'center', padding:5}}>You have successfully paid your booking.</Text>

        </View>
            <TouchableOpacity 
                onPress={()=>navigation.navigate('bottomTabsScreen')}
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