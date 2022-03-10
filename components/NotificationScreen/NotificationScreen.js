import React, { useState,useEffect } from 'react'
import { SafeAreaView,View,Text, Dimensions,TouchableOpacity,StyleSheet,ScrollView, Image,FlatList,ToastAndroid} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons'
import {db, auth} from '../firebase-config';

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Fonts from 'react-native-vector-icons/Fontisto';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const NotificationScreen = ({navigation,route}) => {

   const id = auth.currentUser.uid;

    const [notification,setNotification] =  useState([]);
    const [hotel, setHotel] =  useState([]);
    const [notificationKey, setNotificationKey] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal =(key)=>{
        setModalVisible(!modalVisible);
        setNotificationKey(key);
    }

    const handleCancel=()=>{
       setModalVisible(false);
    }

    const handleContinue=()=>{
        navigation.navigate('stripeScreen',{key: notificationKey});
        setModalVisible(false);
     }
    
    useEffect(()=>{
        db.ref('/bookings/').on('value',snap=>{
            const notificationList = [];

            const info = snap.val();

            for(let k in info){
                notificationList.push({
                    check_in_date: info[k].check_in_date,
                    check_out_date: info[k].check_out_date,
                    no_adults: info[k].no_adults,
                    no_children: info[k].no_children,
                    no_nights: info[k].no_nights,
                    note: info[k].note,
                    payment_status: info[k].payment_status,
                    room_id: info[k].room_id,
                    hotel_id: info[k].hotel_id,
                    total_price: info[k].total_price,
                    user_id: info[k].user_id,
                    hotel_name: info[k].hotel_name,
                    hotel_city: info[k].hotel_city,
                    hotel_town: info[k].hotel_town,
                    hotel_img: info[k].hotel_img,
                    time: info[k].time,
                    key: k
                })
              
            }
            setNotification(notificationList);
        })

    },[])

    
    const Card=(notification)=>{
        return(
            
            <TouchableOpacity onPress={()=>{toggleModal(notification.notification.key)}}>

                <View style={{marginVertical:10,marginHorizontal: 30, padding:10, backgroundColor:'#eee', elevation:2, borderRadius:5,display:'flex', flexDirection:'row'}}>

                <View style={{borderRadius:100, border: 1, backgroundColor:'#eee000', width:50, height:50}}>
                    <Image source={{uri:notification.notification.hotel_img}} style={{width:'100%', height:'100%', resizeMode: 'cover', borderRadius:10}}/>
                </View>

                <View style={{paddingHorizontal:10}}>

                    <Text>{notification.notification.hotel_name}</Text>
                    <Text style={{fontSize:12}}> <Icons name="location-pin" size={14} color="#333" style={{paddingRight:5}}/>{notification.notification.hotel_town}</Text>
                    <Text style={{fontSize: 12, paddingLeft:5}}> Status: <Text style={{color: 'red'}}> {notification.notification.payment_status} Payment</Text>{console.log(notification)}</Text>

                </View>

                </View>

            </TouchableOpacity>
        )

    }
    
  return (
    <SafeAreaView style={{height: height, width: width}}>

        <View style={{height: height, width: width}}>

            {/* tool bar */}
            <View style={{ display:'flex',
                    flexDirection: 'row',alignItems:'center',backgroundColor:'#fff', paddingVertical:20,paddingHorizontal:10}}>

                        <TouchableOpacity
                            onPress={() =>navigation.navigate('bottomTabsScreen')}
                            >
                            <Icons name="keyboard-backspace" size={28} color="#000"/>
                        </TouchableOpacity>

                        <View style={{justifyContent: 'center', width: '100%', flex:1}}>
                            <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',}}>My Notifications</Text>
                        </View>

            </View>

                <View style={{height:height, width:width, paddingTop:40}}>

                   <FlatList
                       data={notification}
                       renderItem={({item})=><Card notification={item}/>}
                   />

                </View>

                <Modal
                    isVisible={modalVisible}
                    animationIn='zoomIn'
                    animationOut='zoomOut'
                    >

                    <View style={styles.modalView}>

                        <Text style={{fontSize: 16, fontWeight: 'bold', color:'#000'}}>Notification Details</Text>

                        <Text style={{marginVertical:10}}>Kind reminder to make payment to your booking or cancel it if you no longer available for the occupation.</Text>

                        <View style={{flexDirection: 'row',justifyContent:'center', marginVertical: 10,}}>

                            <TouchableOpacity
                                style={styles.modalButton2}
                                    onPress={handleCancel}
                                >
                                <Text style={styles.modalButtonText}>Cancel Booking</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={handleContinue}
                                >
                                <Text style={styles.modalButtonText}>Pay Now</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                
                </Modal>

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
        backgroundColor: '#333',
        borderRadius: 1,
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
    },
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
        backgroundColor: '#16A596',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginLeft: 10,
        elevation: 2,
        shadowColor:'#000',
        shadowOffset: {width:2,height:2},
        shadowOpacity:0.25,
        shadowRadius:3.5,
        width: '40%',
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
        fontSize: 16,
        textAlign: 'center',
    }
});

export default NotificationScreen