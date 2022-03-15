import React, { useState } from 'react';
import { View,Text, ScrollView,Image, StatusBar, TextInput, TouchableOpacity, StyleSheet,ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import circles from '../Images/sign_circle.png';
import {Icon} from 'react-native-elements';
import { auth, db } from '../firebase-config';
import * as yup from 'yup';
import { Formik } from 'formik';


const RegisterScreen = ({navigation}) => {

    const [visible, setVisible] = useState(false);

    const [passwordSecured, setPasswordSecured] = useState(true)

    const validateInputs=yup.object({
        email: yup.string().required('email is required!').email('enter valid email!'),
        password: yup.string().required('password is required!').min(6,({min})=>'password must at least be' + `${min}`+ 'characters'),
        fullNames: yup.string().required('Field can not be empty'),
        phoneNo: yup.string().required('Field can not be empty').max(10)
    })

    
    const handleRegistration= async (data) => {
        const {Uid,email,password,fullNames,phoneNo} = data;
       
        try{
            if(visible===false){
                setVisible(true)
                await auth.createUserWithEmailAndPassword(email.trim().toLowerCase(), password)
                .then(res=>{
                    db.ref('/users').child(res.user.uid).set({
                        Email:email.trim().toLowerCase(),
                        fullNames: fullNames,
                        phoneNo: phoneNo,
                        Uid: res.user.uid
                    })
                    navigation.navigate('bottomTabsScreen')
                    setVisible(false)
                    }
                );
                
                console.log(email, password, fullNames, phoneNo);
                
            }
        }
        catch(err){
            console.log(err.message);
            setVisible(false);
        }
    }
    
    return (
        <SafeAreaView style={{height: '100%'}}>

            <StatusBar backgroundColor='#C99E30'/>

            <View style={{backgroundColor: 'white', height: '100%'}}>

                    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>

                            <View style={{position: 'relative', alignSelf:'flex-end', marginTop: 15}}>
                                <Image source={circles}/>
                            </View>

                            <View style={{alignSelf:'flex-start', justifyContent: 'flex-start', position: 'relative', left:30,top:-10,right:10}}>

                                <Text style={{fontSize:18, fontWeight: 'bold',letterSpacing: 2, textTransform:'uppercase'}}>Create</Text>
                                <Text style={{fontSize:18, fontWeight: 'bold',letterSpacing: 2, textTransform:'uppercase'}}>an Account</Text>
                                <Text style={{fontSize:10, fontWeight: 'normal', letterSpacing: 0.5, textTransform:'lowercase'}}>Please enter valid credentials to create an account.</Text>

                            </View>

                            <Formik 
                                initialValues={{email: '',password: '',fullNames:'',phoneNo:''}}
                                validationSchema={validateInputs}
                                onSubmit={(value,action) =>{
                                    action.resetForm()
                                    handleRegistration(value)
                                }}
                            
                            >

                            {(props)=>(
                                <View>
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
                                        value={props.values.email}
                                        onChangeText={props.handleChange('email')}
                                        style={{flex: 1, paddingHorizontal: 12}}
                                        placeholder={'Email Address'}
                                        textContentType='emailAddress'
                                    />

                                </View>

                                <View style={{
                                width: '100%', height: 44,backgroundColor: '#F9F9F9',borderRadius:15,shadowColor:'#000',
                                shadowOffset:{width:0,height:3},shadowOpacity:0.27,shadowRadius:4.65,elevation:6,
                                paddingHorizontal:10,display: 'flex',flexDirection: 'row',padding:10,
                                alignItems:'center',marginTop: 20}}>

                                    <Icon
                                        color='rgba(0, 0, 0, 0.25)'
                                        name='user'
                                        type='font-awesome'
                                        size={20}
                                    />

                                    <TextInput
                                        value={props.values.fullNames}
                                        onChangeText={props.handleChange('fullNames')}
                                        style={{flex: 1, paddingHorizontal: 12}}
                                        placeholder={'Full Names'}
                                        textContentType='name'
                                    />

                                </View>

                                <View style={{
                                width: '100%', height: 44,backgroundColor: '#F9F9F9',borderRadius:15,shadowColor:'#000',
                                shadowOffset:{width:0,height:3},shadowOpacity:0.27,shadowRadius:4.65,elevation:6,
                                paddingHorizontal:10,display: 'flex',flexDirection: 'row',padding:10,
                                alignItems:'center',marginTop: 20}}>

                                    <Icon
                                        color='rgba(0, 0, 0, 0.25)'
                                        name='phone-square'
                                        type='font-awesome'
                                        size={20}
                                    />

                                    <TextInput
                                        value={props.values.phoneNo}
                                        onChangeText={props.handleChange('phoneNo')}
                                        style={{flex: 1, paddingHorizontal: 12}}
                                        placeholder={'Phone Number'}
                                        // textContentType='telephoneNumber'
                                        keyboardType='phone-pad'
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
                                    value={props.values.password}
                                    onChangeText={props.handleChange('password')}
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
                                onPress={props.handleSubmit}>
                                <Text style={styles.buttonText}>SIGN UP</Text>
                            </TouchableOpacity>
                            {
                                visible&&(<View style={{marginTop: 40, alignItems:'center'}}>
                                <ActivityIndicator size="large" color="#000" animating={visible}/>
                            </View>)
                            }
                            

                        </View>
                    </View>
                            )}
                            
                        </Formik>
                    </ScrollView>

                    <View style={{alignSelf:'flex-start', justifyContent: 'flex-start', position: 'relative',
                        top: -15, flexDirection: 'row',
                        display: 'flex',
                        padding: 15,
                        justifyContent:'center',
                        alignItems:'center', 
                        textAlign:'center',width: '100%'}}>

                        <Text style={{padding: 5}}>Already have an account?</Text>

                        <TouchableOpacity onPress={()=>{navigation.navigate('loginScreen')}}>
                            <Text style={{padding: 5}}>Sign In</Text>
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

export default RegisterScreen
