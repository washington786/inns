import React,{useState} from 'react';
import {
    SafeAreaView,View,Text, 
    Dimensions,TouchableOpacity,StyleSheet,
    ScrollView,ActivityIndicator,
    ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ico from 'react-native-vector-icons/Fontisto';
import testImage from '../Images/dash/bedroom.jpg';
import { Input } from 'react-native-elements';
// import { Button } from 'react-native';
import {auth,db} from '../firebase-config';

const AccountSettingsScreen = ({navigation}) => {
    
    const windowWidth = Dimensions.get('screen').width;
    const windowHeight = Dimensions.get('screen').height;

    // values
    const [Email,setEmail] = useState();
    const [fullName, setFullNames] = useState();
    const [phoneNo,setPhone] = useState();

    // spinner
    const [submitSpinner, setSubmitSpinner] = useState(false);

    const user = auth.currentUser.uid;

    React.useEffect(()=> {
        db.ref('/users/' + user).on('value',snap => {
            setEmail(snap.val() && snap.val().Email);
            setPhone(snap.val().phoneNo);
            setFullNames(snap.val().fullNames)
        })
    },[])

    const UpdateUserAccount=()=>{
        db.ref('/users/' + user).update({
            Email: Email,
            phoneNo: phoneNo,
            fullNames: fullName
        })
        ToastAndroid.show('Successfully updated details.', 5000);
    }

    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
                <ScrollView style={{backgroundColor: 'white',height: '100%', width: '100%',
                 }}>

                 {/* tool bar */}
                    <View style={{marginHorizontal: 15, 
                    marginVertical:10, display:'flex',
                    flexDirection: 'row',alignItems:'center'}}>

                        <TouchableOpacity
                            onPress={() =>navigation.navigate('accountTabScreen')}
                            >
                            <Icons name="keyboard-backspace" size={28} color="#000"/>
                        </TouchableOpacity>

                        <View style={{justifyContent: 'center', width: '100%', flex:1}}>
                            <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',}}>My Account Profile</Text>
                        </View>

                    </View>

                    <View style={{backgroundColor:'white', textAlign: 'center', width:windowWidth, height:windowHeight*0.25, justifyContent: 'center', alignItems: 'center'}}>

                        <View style={{backgroundColor:'#F6C954', borderRadius:70, width: 140, height:140, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                            <Icon name={'account'} style={{color:'white'}} size={70}/>
                        </View>

                    </View>
                    
                    <View style={{marginHorizontal:20, marginVertical:10}}>

                        <Input
                            placeholder={'example@gmail.com'}
                            style={{paddingLeft:8}}
                            leftIcon={
                                <FontAwesome
                                    name='envelope'
                                    size={20}
                                    color={'#000'}/>
                            }
                            autoCorrect={false}
                            keyboardType={'email-address'}
                            autoCapitalize={'none'}
                            textContentType='emailAddress'
                            value={Email}
                            onChangeText={text=>setEmail(text)}
                        />

                        <Input
                            placeholder={'John Lovers'}
                            style={{paddingLeft:8}}
                            leftIcon={
                                <Icon
                                    name='account-box'
                                    size={25}
                                    color={'#000'}/>
                            }
                            autoCorrect={false}
                            keyboardType={'name-phone-pad'}
                            autoCapitalize={'none'}
                            textContentType='name'
                            value={fullName}
                            onChangeText={e=>setFullNames(e)}
                        />

                        <Input
                            placeholder={'0813457912'}
                            style={{paddingLeft:8}}
                            leftIcon={
                                <Icon
                                    name='card-account-phone'
                                    size={25}
                                    color={'#000'}/>
                            }
                            autoCorrect={false}
                            keyboardType={'phone-pad'}
                            autoCapitalize={'none'}
                            textContentType='telephoneNumber'
                            value={phoneNo}
                            onChangeText={text=>setPhone(text)}
                        />

                        <TouchableOpacity
                            style={styles.updateButton}
                            onPress={UpdateUserAccount}
                        >
                        <Text style={styles.buttonText}>UPDATE</Text>{
                            submitSpinner?(<ActivityIndicator
                                style={{marginLeft:10}}
                                color='#fff'
                                size={'small'}
                            />):null
                        }
                        </TouchableOpacity>

                    </View> 

                 </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    updateButton:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        paddingVertical: 10,
        paddingHorizontal:10,
        borderRadius:5,
        elevation:2,
        shadowColor:'#000',
        shadowOffset:{width:2, height:2},
        shadowOpacity: 0.25,
        shadowRadius:3.5,
        backgroundColor:'#F6C954',
        textAlign:'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical:10
    },
    buttonText:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',

    }
})

export default AccountSettingsScreen
