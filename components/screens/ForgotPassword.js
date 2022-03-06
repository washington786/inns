import React from 'react'
import { ScrollView,View,
    Image,StatusBar,Text,
    TextInput,StyleSheet,
    TouchableOpacity,
    ToastAndroid
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import circles from '../Images/sign_circle.png';
import btCircle from '../Images/circles.png'
import {auth} from '../firebase-config';

const ForgotPassword = ({navigation}) => {

    const [emailAddress, setEmailAddress] = React.useState('');
    
    const handleForgotPassword=()=>{
        auth.sendPasswordResetEmail(emailAddress).then(()=>{
            ToastAndroid.show('Email reset link has been sent to ' + emailAddress, 2000)
            navigation.navigate('resetSuccessScreen')
        }).catch((err)=>{
            ToastAndroid.CENTER.show(err.message);
        })
    }

    return (

        <SafeAreaView>

            {/* status bar background color*/}
            <StatusBar backgroundColor='#C99E30'/>

            <View style={{backgroundColor: 'white', height: '100%'}}>

                <ScrollView style={{backgroundColor: 'white', height: '100%'}}>

                    <View style={{alignSelf:'flex-end', marginTop: 15}}>
                        <Image source={circles}/>
                    </View>

                    <View style={{alignSelf:'flex-start', justifyContent: 'flex-start', position: 'absolute', padding:15, left: 0, top:10}}>

                         <TouchableOpacity
                            onPress={()=>{navigation.navigate('loginScreen')}}  
                         >
                            <Icon
                                color='rgba(0, 0, 0, 0.25)'
                                name='long-arrow-left'
                                type='font-awesome'
                                size={20}
                            />
                        </TouchableOpacity>

                        <View style={{alignSelf:'flex-start', justifyContent: 'flex-start', left:15, top:55}}>

                            <Icon
                                color='rgba(247, 201, 84, 0.79)'
                                name='lock'
                                type='font-awesome'
                                size={90}
                            />

                        </View>

                    </View>

                    <View style={{alignSelf:'flex-start', justifyContent: 'flex-start', position: 'relative', left:30,top:-10,right:10}}>

                        <Text style={{fontSize:18, fontWeight: 'bold',letterSpacing: 2}}>RECOVER</Text>
                        <Text style={{fontSize:18, fontWeight: 'bold',letterSpacing: 2}}>YOUR PASSWORD</Text>
                        <Text style={{fontSize:11, fontWeight: 'normal', letterSpacing: 0.5}}>Please enter an email you used to create an account.</Text>

                    </View>

                    <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', margin: 10, width: '85%'}}>

                        <View style={{
                            width: '100%', height: 44,backgroundColor: '#F9F9F9',borderRadius:15,shadowColor:'#000',
                            shadowOffset:{width:0,height:3},shadowOpacity:0.27,shadowRadius:4.65,elevation:6,
                            paddingHorizontal:10,display: 'flex',flexDirection: 'row',padding:10,
                            alignItems:'center',marginTop: 25}}>

                            <Icon
                                color='rgba(0, 0, 0, 0.25)'
                                name='envelope'
                                type='font-awesome'
                                size={20}
                            />

                            <TextInput
                                style={{flex: 1, paddingHorizontal: 12}}
                                placeholder={'Email Address'}
                                value={emailAddress}
                                onChangeText={(text)=>setEmailAddress(text)}
                            />

                        </View>

                    </View>

                    <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', margin: 10, width: '70%',top: 10}}>

                        {/* button to submit */}
                        <TouchableOpacity onPress={handleForgotPassword} style={styles.buttonCustom}><Text style={styles.buttonText}>SUBMIT</Text></TouchableOpacity>

                    </View>

                </ScrollView>

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

export default ForgotPassword