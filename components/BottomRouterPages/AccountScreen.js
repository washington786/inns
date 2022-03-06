import React from 'react'
import { SafeAreaView,View,Text, Dimensions,ScrollView,TouchableOpacity,StyleSheet,ToastAndroid } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IonIcons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import {auth} from '../firebase-config';

const AccountScreen = ({navigation}) => {

    const windowWidth = Dimensions.get('screen').width;
    const windowHeight = Dimensions.get('screen').height;

    const [modalVisible, setModalVisible] = React.useState(false);
    
    const toggleModal =()=>{
        setModalVisible(!modalVisible);
    }

    const handleSignOut=()=>{
        auth.signOut().then(()=>{
            ToastAndroid.show('account signed out.', 2000);
            navigation.navigate('loginScreen')
        })
    }

    return (
        <SafeAreaView style={{backgroundColor: 'white', height: windowHeight, width: windowWidth}}>

            <View style={{backgroundColor: 'white', height: windowHeight, width: windowWidth, flex: 1}}>


               <ScrollView style={{backgroundColor: 'white', height: windowHeight, width: windowWidth, flex: 1}}>


                    {/* tool bar */}
                    <View style={{
                    display:'flex',
                    flexDirection: 'row',alignItems:'center', borderBottomWidth: 1, borderBottomColor:'rgba(0, 0, 0, 0.1)'}}>

                        <View style={{justifyContent: 'center', width: '100%',  backgroundColor:'#F9F9F9'}}>
                            <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',paddingBottom: 5,paddingTop:10,marginVertical:10, }}>Account Settings</Text>
                        </View>

                    </View>

                    {/* page indexes */}

                    <View style={{justifyContent:'space-evenly', alignItems: 'stretch'}}>

                        <View>

                            <TouchableOpacity onPress={()=>navigation.navigate('accountSettingScreen')}>
                                <View style={{
                                    display:'flex',
                                    flexDirection: 'row',alignItems:'center', borderBottomWidth: 1, 
                                    borderBottomColor:'rgba(0, 0, 0, 0.05)', marginHorizontal: 10, marginVertical:10, marginTop:40, justifyContent:'space-between'}}>

                                    <View style={{display:'flex',flexDirection: 'row',alignItems:'center'}}>

                                        <Icons name='account-cog' size={35} style={{paddingRight:20,color:'#C99E30'}}/>
                                        <Text style={{fontSize:15, fontWeight: 'bold',textAlign: 'center',paddingBottom: 5,paddingTop:10,marginVertical:10,color:'rgba(0, 0, 0, 0.55)' }}>Account Settings</Text>

                                    </View>

                                    <Icons name='chevron-right' size={25} style={{color:'rgba(0, 0, 0, 0.25)'}}/>
                                </View>
                            </TouchableOpacity>

                            
                            <TouchableOpacity onPress={()=>navigation.navigate('notificationScreen')}>
                                <View style={{
                                    display:'flex',
                                    flexDirection: 'row',alignItems:'center', borderBottomWidth: 1, 
                                    borderBottomColor:'rgba(0, 0, 0, 0.05)', marginHorizontal: 10, marginVertical:10, marginTop:5, justifyContent:'space-between'}}>

                                    <View style={{display:'flex',flexDirection: 'row',alignItems:'center'}}>

                                        <IonIcons name='notifications' size={35} style={{paddingRight:20,color:'#C99E30'}}/>
                                        <Text style={{fontSize:15, fontWeight: 'bold',textAlign: 'center',paddingBottom: 5,paddingTop:10,marginVertical:10,color:'rgba(0, 0, 0, 0.55)' }}>Notifications</Text>

                                    </View>

                                    <Icons name='chevron-right' size={25} style={{color:'rgba(0, 0, 0, 0.25)'}}/>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={()=>navigation.navigate('helpScreen')}>
                                 <View style={{
                                display:'flex',
                                flexDirection: 'row',alignItems:'center', borderBottomWidth: 1, 
                                borderBottomColor:'rgba(0, 0, 0, 0.05)', marginHorizontal: 10, marginVertical:10, marginTop:5, justifyContent:'space-between'}}>

                                    <View style={{display:'flex',flexDirection: 'row',alignItems:'center'}}>

                                        <Icons name='help-box' size={35} style={{paddingRight:20,color:'#C99E30'}}/>
                                        <Text style={{fontSize:15, fontWeight: 'bold',textAlign: 'center',
                                        paddingBottom: 5,paddingTop:10,marginVertical:10,color:'rgba(0, 0, 0, 0.55)' }}>Help</Text>

                                    </View>

                                    <Icons name='chevron-right' size={25} style={{color:'rgba(0, 0, 0, 0.25)'}}/>
                                    
                                </View>
                            </TouchableOpacity>
                           

                            <TouchableOpacity onPress={()=>navigation.navigate('aboutAppScreen')}>
                                <View style={{
                                display:'flex',
                                flexDirection: 'row',alignItems:'center', borderBottomWidth: 1, 
                                borderBottomColor:'rgba(0, 0, 0, 0.05)', marginHorizontal: 10, marginVertical:10, marginTop:5, justifyContent:'space-between'}}>

                                    <View style={{display:'flex',flexDirection: 'row',alignItems:'center'}}>

                                        <Icons name='information' size={35} style={{paddingRight:20,color:'#C99E30'}}/>
                                        <Text style={{fontSize:15, fontWeight: 'bold',textAlign: 'center',
                                        paddingBottom: 5,paddingTop:10,marginVertical:10,color:'rgba(0, 0, 0, 0.55)' }}>About App</Text>

                                    </View>

                                    <Icons name='chevron-right' size={25} style={{color:'rgba(0, 0, 0, 0.25)'}}/>
                                    
                                </View>
                            </TouchableOpacity>
                            

                        </View>

                        <TouchableOpacity onPress={toggleModal}>
                            <View style={{
                                    display:'flex',
                                    flexDirection: 'row',alignItems:'center', marginHorizontal: 10, marginVertical:10, marginTop:60, justifyContent:'space-between'}}>

                                    <View style={{display:'flex',flexDirection: 'row',alignItems:'center'}}>

                                        <Icon name='logout' size={30} style={{paddingRight:20,color:'#FF1717'}}/>
                                        <Text style={{fontSize:15, fontWeight: 'bold',textAlign: 'center',
                                        paddingBottom: 5,paddingTop:10,marginVertical:10,color:'#FF1717' }}>Logout</Text>

                                    </View>
                                    
                            </View>
                        </TouchableOpacity>

                        {/* modal */}
                        <Modal
                            isVisible={modalVisible}
                            animationIn='zoomIn'
                            animationOut='zoomOut'
                        >

                                <View style={styles.modalView}>

                                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Sign Out</Text>

                                    <Text style={{marginVertical:10}}>You are about to sign out of the application.{"\n"} {"\n"}Do you want to continue to sign out?</Text>

                                    <View style={{flexDirection: 'row',justifyContent:'flex-end'}}>

                                        <TouchableOpacity
                                            style={styles.modalButton}
                                            onPress={()=>setModalVisible(false)}
                                            >
                                            <Text style={styles.modalButtonText}>Cancel</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={styles.modalButton2}
                                            onPress={handleSignOut}
                                            >
                                            <Text style={styles.modalButtonText}>Yes</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>
                            
                        </Modal>

                    </View>

               </ScrollView>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    modalView:{
        backgroundColor: 'white',
        borderRadius:8,
        paddingHorizontal:10,
        paddingVertical:14,
        shadowColor:'#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5
    },
    modalButton:{
        backgroundColor: '#222f3e',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginLeft: 10,
        elevation: 2,
        shadowColor:'#000',
        shadowOffset: {width:2,height:2},
        shadowOpacity:0.25,
        shadowRadius:3.5,
    },
    modalButton2:{
        backgroundColor: '#ff0000',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginLeft: 10,
        elevation: 2,
        shadowColor:'#000',
        shadowOffset: {width:2,height:2},
        shadowOpacity:0.25,
        shadowRadius:3.5,
    },
    modalButtonText:{
        color: '#fff',
        fontSize: 16
    }
})

export default AccountScreen