import React from 'react'
import { View, Text, Image,StyleSheet, ActivityIndicator} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from '../Images/logo.png'
import btCircle from '../Images/circles.png'

const SplashScreen = ({navigation}) => {

    // setting screen time based transition
    setTimeout(()=>{
      navigation.replace('onboardingScreen');
    }, 4000);

    return (
        <SafeAreaView>

            <View style={{backgroundColor: 'white', height: '100%', justifyContent:'center'}}>

                    <View style={styles.container}>

                        <View>
                            <Image source={logo}/>
                        </View>

                      
                        <View>
                            <Text style={styles.logoText}>e-Inns Application</Text>
                        </View>

                        <View style={{backgroundColor:'transparent', width:100, height:100,top: 90}}>
                            <Image style={{width:60,height:60,backgroundColor:'transparent', justifyContent: 'center', alignSelf:'center'}} source={require('../Images/load.gif')}/>
                        </View>

                    </View>
                    
                    {/* <View style={{height:60}}>
                        <Image source={btCircle}/>
                    </View> */}

                </View>
            
        </SafeAreaView>
    )
}

export default SplashScreen

// css style
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        height: '82%',
        width: '100%',
        justifyContent: 'center'
    },

    logoText:{
        color: '#000',
        padding: 5,
        marginTop: 10,
        fontSize: 15,
        fontWeight: '600',
        textAlign:'center'
    }

})
