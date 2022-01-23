import React from 'react'
import { ScrollView,View,Image,StatusBar,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import circles from '../Images/sign_circle.png';
import btCircle from '../Images/circles.png'

const ResetSuccessfulScreen = ({navigation}) => {
    return (
        <SafeAreaView>

            {/* status bar background color*/}
            <StatusBar backgroundColor='#C99E30'/>

            <View style={{backgroundColor: 'white', height: '100%'}}>

                <ScrollView style={{backgroundColor: 'white', height: '100%'}}>

                    <View style={{alignSelf:'flex-end', marginTop: 15}}>
                        <Image source={circles}/>
                    </View>

                    <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', padding:15, left: 0, top:10}}>

                        <Icon
                                color='#17C828'
                                name='check-circle'
                                type='font-awesome'
                                size={90}
                            />

                        <Text style={{fontSize:16, fontWeight: '900',letterSpacing: 2,textAlign:'center'}}>Password Reset Link</Text>
                        <Text style={{fontSize:11, fontWeight: '200',letterSpacing: 2, textAlign:'center', padding:5}}>password recovery email has been sent to your mail.</Text>

                    </View>

                    {/* continue button view */}
                    <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', margin: 10, width: '70%',top: 10}}>

                        <TouchableOpacity onPress={()=>{navigation.navigate('loginScreen')}} style={styles.buttonCustom}><Text style={styles.buttonText}>CONTINUE</Text></TouchableOpacity>

                    </View>

                </ScrollView>

                {/* bottom circles view*/}
                <View style={{top:40, backgroundColor:'white'}}>
                        <Image source={btCircle}/>
                </View>


            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttonCustom:{
        width: '100%',
        height: 45,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: 14,
        backgroundColor: '#C99E30',
        borderRadius: 15,
        elevation: 2,
        shadowColor:'#000',
        shadowOffset: {width:2, height:2},
        shadowOpacity:0.25,
        shadowRadius:3.5,
        marginBottom: 10
    },
    buttonText:{
        color: '#fff',
        fontWeight:'bold',
        fontSize:16
    }
})

export default ResetSuccessfulScreen
