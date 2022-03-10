import React,{useState,useEffect} from 'react';
import { SafeAreaView,View,Text, Dimensions,TouchableOpacity,StyleSheet,ScrollView, ActivityIndicator,FlatList,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Fonts from 'react-native-vector-icons/Fontisto';
import moment from 'moment';
import {db,auth} from '../firebase-config';
import Modal from 'react-native-modal';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const BookingConfirmation = ({navigation, route,}) => {

    const {room} = route.params;
    const {hotel} = route.params;
    const booking = route.params;
    const {noNights,noAdults,noChild,note,checkInDate,checkOutDate} = route.params;
    const date = moment(checkInDate).format('DD-MMM-YYYY');
    const date2 = moment(checkOutDate).format('DD-MMM-YYYY');
    const totalPrice = room.room.roomPrice*noNights;
    const id = auth.currentUser.uid;

    const [visible, setVisible] = useState(false);
    console.log("key booking: ", booking.key);

    const time= moment().utcOffset('+02:00').format('HH:MM');
    
    const handleSubmitBooking=async() => {
       
            setVisible(true);
           await db.ref('/bookings/').push({
                hotel_id: hotel.key,
                room_id: room.room.key,
                check_out_date: checkOutDate,
                check_in_date: checkInDate,
                no_children: noChild,
                no_adults: noAdults,
                no_nights: noNights,
                note: note,
                total_price: totalPrice,
                payment_status: 'pending',
                booking_status:'',
                user_id: id,
                hotel_name: hotel.name,
                hotel_province: hotel.province,
                hotel_city: hotel.city,
                hotel_town: hotel.town,
                hotel_suburb: hotel.suburb,
                hotel_img: hotel.display_image_url,
                time: time,
            }).then(()=>{
                // ToastAndroid.show('You have successfully booked the room',2000)
                toggleModal()
            })
            .catch(err=>{
                ToastAndroid.show('Failed to create booking, due to' + err.message, ', please try again.',2000);
            })
       
    };

    // modal
    const [modalVisible, setModalVisible] = React.useState(false);
    const toggleModal =()=>{
        setModalVisible(!modalVisible);
    }

    const handleCancel=()=>{
       navigation.navigate('bottomTabsScreen');
       setModalVisible(false);
    }

    const handleContinue=()=>{
        navigation.navigate('stripeScreen',{totalPrice,room,hotel});
        setModalVisible(false);
     }

  return (
    <SafeAreaView style={{backgroundColor: '#eee', height: '100%'}}>
        <View>

        {/* tool bar */}
        <View style={{paddingHorizontal: 15, 
                paddingVertical:10, display:'flex',
                flexDirection: 'row',alignItems:'center', elevation:1, backgroundColor:'#fff'}}>
                    <TouchableOpacity
                        onPress={() =>('')}
                        >
                        <Icon name="keyboard-backspace" size={28} color="#000"/>
                    </TouchableOpacity>

                    <View style={{justifyContent: 'center', width: '100%', flex:1, paddingVertical:10}}>
                        <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',}}>Confirm Booking Details</Text>
                    </View>
        </View>

            <ScrollView style={{backgroundColor: '#eee',height: '100%', width: '100%',
                 }}>

                {/* instructions */}
                <View style={{marginHorizontal: 20, 
                    marginVertical:10, display:'flex',
                    flexDirection: 'row',alignItems:'center',
                    backgroundColor:'#F9F9F9', padding:5,
                    borderRadius:15
                    }}>

                    <Icon 
                        style={{paddingLeft:5}}
                        name="information-outline" 
                        size={20}
                        color="rgba(0, 0, 0, 0.25)"/>

                    <Text style={{
                        fontSize:10, 
                        paddingLeft:5,
                        color:'rgba(0, 0, 0, 0.45)'
                        }}>
                        Please confirm the booking details below to continue with the process.
                    </Text>

                </View>

                <View style={{marginHorizontal: 20, 
                    marginVertical:10, display:'flex',
                    flexDirection: 'column',alignItems:'flex-start',
                    backgroundColor:'#F9F9F9', padding:5,
                    borderRadius:2
                    }}>

                    
                        <Text style={{fontSize:14, 
                        paddingLeft:5,
                        color:'rgba(0, 0, 0, 0.45)'}}>Hotel Information</Text>

                        <View style={{marginVertical:15, flexDirection: 'row'}}>
                        <Icons name='house' size={20} style={{marginHorizontal: 10}} color={'rgba(0, 0, 0, 0.50)'}/>
                            <Text style={{fontSize:16, 
                        paddingLeft:5,
                        color:'rgba(0, 0, 0, 0.70)'}}>{hotel.name}</Text>
                        </View>

                        <View style={{marginVertical:0, flexDirection: 'row', marginHorizontal: 15}}>
                        <Icons name='location-on' size={20} style={{marginHorizontal: 10}} color={'rgba(0, 0, 0, 0.20)'}/>
                            <Text style={{fontSize:16, 
                        paddingLeft:5,
                        color:'rgba(0, 0, 0, 0.40)'}}>{hotel.suburb}, {hotel.town}, {hotel.province}</Text>
                        </View>

                        <Text style={{fontSize:14, 
                        paddingLeft:35,
                        color:'rgba(0, 0, 0, 0.45)', marginVertical: 8,textDecorationLine:'underline', paddingTop:10}}>Room Information</Text>

                        <View style={{marginVertical:8, flexDirection: 'row', }}>
                            <Fonts name='room' size={20} style={{marginHorizontal: 25}} color={'rgba(0, 0, 0, 0.40)'}/>
                                <Text style={{fontSize:16, paddingLeft:2,
                            color:'rgba(0, 0, 0, 0.60)', paddingTop: 4,}}>{room.room.roomName}</Text>
                        </View>

                        <View style={{marginVertical:4, flexDirection: 'column',marginHorizontal: 22}}>
                            <Text style={{fontSize:16, paddingLeft:10,
                                color:'rgba(0, 0, 0, 0.40)', marginHorizontal: 10}}>Room No:{"\t\t\t\t\t"} {room.room.roomNo}</Text>
                            <Text style={{fontSize:16, paddingLeft:10,
                                color:'rgba(0, 0, 0, 0.40)', marginHorizontal: 10, marginVertical:5,}}>Room Type: {"\t\t\t"} {room.room.roomType}</Text>
                            <Text style={{fontSize:16, paddingLeft:10,
                                color:'rgba(0, 0, 0, 0.40)', marginHorizontal: 10, marginVertical:5,}}>Room Price: {"\t\t\t"} <Text style={{color:'#ff0000'}}>R{room.room.roomPrice}/night</Text></Text>
                            
                            {/* <Text style={{fontSize:16, paddingLeft:10,
                                color:'rgba(0, 0, 0, 0.40)', marginHorizontal: 10, marginVertical:5,textAlign:'justify'}}>Room Description: {"\n"}<Text style={{textAlign:'justify', fontSize:10}}>
                                {room.room.room_description}
                                </Text></Text> */}
                        </View>

                </View>

                <View style={{marginHorizontal: 20, 
                    marginVertical:10, display:'flex',
                    flexDirection: 'column',alignItems:'flex-start',
                    backgroundColor:'#F9F9F9', padding:10,
                    borderRadius:2, position: 'relative'
                    }}>

                    <Text style={{fontSize:16, paddingLeft:2,
                    color:'rgba(0, 0, 0, 0.40)', marginHorizontal: 1}}>Booking Details</Text>
                    
                    <View style={{marginVertical:8, flexDirection: 'row', }}>
                            <Fonts name='date' size={20} style={{marginHorizontal: 10}} color={'rgba(0, 0, 0, 0.70)'}/>
                                <Text style={{fontSize:16, paddingLeft:5,
                        color:'rgba(0, 0, 0, 0.70)', paddingTop: 0,}}>{date} - {date2}</Text>
                    </View>

                    <View style={{marginVertical:5, flexDirection: 'row', }}>
                            <Icons name='people-outline' size={20} style={{marginHorizontal: 10}} color={'rgba(0, 0, 0, 0.70)'}/>
                                <Text style={{fontSize:16, paddingLeft:5,
                            color:'rgba(0, 0, 0, 0.70)', paddingTop: 0,}}>{noAdults} adults & {noChild} child(s)</Text>
                    </View>

                    <View style={{marginVertical:5, flexDirection: 'row', }}>
                            <Icons name='nights-stay' size={20} style={{marginHorizontal: 10}} color={'rgba(0, 0, 0, 0.70)'}/>
                                <Text style={{fontSize:16, paddingLeft:5,
                            color:'rgba(0, 0, 0, 0.70)', paddingTop: 0,}}>{noNights} nights</Text>
                    </View>

                    <View style={{marginVertical:5, flexDirection: 'row', paddingRight:30}}>
                            <Icon name='alert' size={20} style={{marginHorizontal: 10}} color={'rgba(0, 0, 0, 0.70)'}/>
                                <Text style={{fontSize:10, paddingLeft:5,
                            color:'rgba(0, 0, 0, 0.70)', paddingTop: 0,}}>{note}</Text>
                    </View>

                </View>

                <View style={{marginHorizontal: 20, 
                    marginVertical:10, display:'flex',
                    flexDirection: 'column',alignItems:'flex-start',
                    backgroundColor:'#F9F9F9', padding:10,
                    borderRadius:2, position: 'relative'
                    }}>
                    <Text>Total amount ------------------------------------------------<Text style={{color:'#ff0000', fontWeight: 'bold'}}>  R{totalPrice}</Text></Text>

                    <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', margin: 10, width: '70%',top: 10}}>
                        {/* button to sign in */}
                        <TouchableOpacity style={styles.buttonCustom}
                        onPress={handleSubmitBooking} 
                        ><Text style={styles.buttonText}>BOOK NOW</Text></TouchableOpacity>
                    </View>
                </View>

                 {/* modal */}
                 <Modal
                            isVisible={modalVisible}
                            animationIn='zoomIn'
                            animationOut='zoomOut'
                        >

                                <View style={styles.modalView}>

                                    <TouchableOpacity
                                                onPress={handleCancel}
                                        >
                                        <EntypoIcons name='squared-cross' size={28} color='#9D9D9D' style={{textAlign:'right'}}/>
                                    </TouchableOpacity>

                                    <Text style={{fontSize: 16, fontWeight: 'bold', color:'#16A596'}}>CONTINUE TO PAYMENT</Text>

                                    <Text style={{marginVertical:10}}>You have successfully booked a room at {hotel.name} from {moment(checkInDate).format('YYYY-MM-DD')} until {moment(checkOutDate).format('YYYY-MM-DD')}.{"\n"} {"\n"}Would you like to to continue to make a transaction for your booking?</Text>

                                    <View style={{flexDirection: 'row',justifyContent:'center', marginVertical: 10,}}>

                                        <TouchableOpacity
                                            style={styles.modalButton}
                                            onPress={handleContinue}
                                            >
                                            <Text style={styles.modalButtonText}>CONTINUE</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>
                            
                </Modal>

            </ScrollView>
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
        width: '70%',
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

export default BookingConfirmation