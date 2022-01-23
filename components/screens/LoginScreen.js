import React, { useState } from 'react';
import { View,Text, ScrollView,Image, StatusBar, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import circles from '../Images/sign_circle.png';
import {Icon} from 'react-native-elements';

const LoginScreen = ({navigation}) => {

    const [passwordSecured, setPasswordSecured] = useState(true)

    return (
        <SafeAreaView style={{height: '100%'}}>

            <StatusBar backgroundColor='#C99E30'/>
            
            <View style={{backgroundColor: 'white', height: '100%'}}>

                <ScrollView style={{backgroundColor: 'white', height: '100%'}}>

                     <View style={{position: 'relative', alignSelf:'flex-end', marginTop: 15}}>
                        <Image source={circles}/>
                    </View>

                    <View style={{alignSelf:'flex-start', justifyContent: 'flex-start', position: 'relative', left:30,top:-10,right:10}}>

                        <Text style={{fontSize:18, fontWeight: 'bold',letterSpacing: 2, textTransform:'uppercase'}}>Sign</Text>
                        <Text style={{fontSize:18, fontWeight: 'bold',letterSpacing: 2, textTransform:'uppercase'}}>Into Account</Text>
                        <Text style={{fontSize:11, fontWeight: 'normal', letterSpacing: 0.5, textTransform:'uppercase'}}>Please enter existing email and password.</Text>

                    </View>

                    <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', margin: 10, width: '85%'}}>

                        <View style={{
                            width: '100%', height: 44,backgroundColor: '#F9F9F9',borderRadius:15,shadowColor:'#000',
                            shadowOffset:{width:0,height:3},shadowOpacity:0.27,shadowRadius:4.65,elevation:6,
                            paddingHorizontal:10,display: 'flex',flexDirection: 'row',padding:10,
                            alignItems:'center',marginTop: 10}}>

                            <Icon
                                color='rgba(0, 0, 0, 0.25)'
                                name='envelope'
                                type='font-awesome'
                                size={20}
                            />

                            <TextInput
                                style={{flex: 1, paddingHorizontal: 12}}
                                placeholder={'Email Address'}
                            />

                        </View>

                        <View style={{
                            width: '100%', height: 44,backgroundColor: '#F9F9F9',borderRadius:15,shadowColor:'#000',
                            shadowOffset:{width:0,height:3},shadowOpacity:0.27,shadowRadius:4.65,elevation:6,
                            paddingHorizontal:10,display: 'flex',flexDirection: 'row',padding:10,
                            alignItems:'center', marginTop: 25}}>

                            <Icon
                            color='rgba(0, 0, 0, 0.25)'
                            name='lock'
                            type='font-awesome'
                            size={20}
                        />

                        <TextInput
                            style={{flex: 1, paddingHorizontal: 12}}
                            placeholder={'Password'}
                            secureTextEntry={passwordSecured}
                            textContentType='password'
                        />

                        <TouchableOpacity
                            style={{padding:4}}
                            onPress={()=>{
                                setPasswordSecured(!passwordSecured);
                            }}
                        >

                         <Icon
                            color='#000'
                            name='eye-slash'
                            type='font-awesome'
                            size={20}
                        />

                        </TouchableOpacity>


                        </View>

                    </View>

                    <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', margin: 10, width: '70%',top: 10}}>

                        {/* button to sign in */}
                        <TouchableOpacity style={styles.buttonCustom} 
                            onPress={()=>{navigation.navigate('bottomTabsScreen')}}
                        ><Text style={styles.buttonText}>SIGN IN</Text></TouchableOpacity>

                    </View>

                    <View style={{alignSelf:'flex-start', justifyContent: 'flex-start', position: 'relative', margin: 10,top: 5,left:15}}>

                        <TouchableOpacity
                            onPress={()=>{navigation.navigate('forgotScreen')}}>
                            <Text style={{fontSize:16,fontWeight:'800', color:'rgba(0,0,0,0.5)', padding: 10}}>Forgot your Password?</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

                <View style={{alignSelf:'flex-start', justifyContent: 'flex-start', position: 'relative',
                        top: -15, flexDirection: 'row',
                        display: 'flex',
                        padding: 15,
                        justifyContent:'center',
                        alignItems:'center', 
                        textAlign:'center',width: '100%'}}>

                        <Text style={{padding: 5}}>Don't have an account?</Text>

                        <TouchableOpacity onPress={()=>{navigation.navigate('registerScreen')}}>
                            <Text style={{padding: 5}}>Sign Up</Text>
                        </TouchableOpacity>



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
export default LoginScreen
