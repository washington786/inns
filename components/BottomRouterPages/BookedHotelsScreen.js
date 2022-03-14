import React, { useState,useEffect } from 'react'
import { SafeAreaView,View,Text, Dimensions,ScrollView,TouchableOpacity,Image} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {db, auth} from '../firebase-config';
// image
import noData from '../Images/empty.png';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const BookedHotelsScreen = ({navigation}) => {

    const [bookings,setBookings] =  useState([]);

    useEffect(()=>{
        db.ref('/bookings/').on('value',snap=>{
            const bookingList = [];

            const info = snap.val();

            for(let k in info){
                bookingList.push({
                    booking_status: info[k].booking_status,
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
            setBookings(bookingList);
        })

    },[])

    return (
        
        <SafeAreaView style={{backgroundColor: 'white', height: windowHeight, width: windowWidth}}>

             <View style={{backgroundColor: 'white', height: windowHeight, width: windowWidth, flex: 1}}>

                 {/* tool bar */}
                    <View style={{
                    display:'flex',
                    flexDirection: 'row',alignItems:'center', borderBottomWidth: 1, borderBottomColor:'rgba(0, 0, 0, 0.1)'}}>

                        <View style={{justifyContent: 'center', width: '100%',  backgroundColor:'#F9F9F9'}}>
                            <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',paddingBottom: 5,paddingTop:10,marginVertical:10, }}>My Bookings</Text>
                        </View>

                    </View>

                <ScrollView style={{height: windowHeight, width: windowWidth, backgroundColor:'white'}}>

                    {bookings.map((item)=>{
                        return(
                        item.payment_status==="paid" && item.booking_status==='successful'?
                        <View style={{height: windowHeight, marginHorizontal: 10, marginVertical: 10}}>

                           {/* note */}
                           <View style={{ 
                                marginVertical:10, display:'flex',
                                flexDirection: 'row',alignItems:'center',
                                backgroundColor:'#F9F9F9', padding:5,
                                borderRadius:15
                                }}>

                                <Icon 
                                    style={{paddingLeft:5}}
                                    name="info" 
                                    size={20}
                                    color="rgba(0, 0, 0, 0.25)"/>

                                <Text style={{
                                    fontSize:10, 
                                    paddingLeft:5,
                                    color:'rgba(0, 0, 0, 0.45)'
                                    }}>
                                    Confirmed and validated (paid) bookings only.
                                </Text>

                            </View>

                            <TouchableOpacity onPress={()=>navigation.navigate('bookingDetails',{bookings})}>
                                <View style={{backgroundColor:'#eee', marginVertical:10, height:85, padding:5,flexDirection:'row'}}>
                                    <View style={{borderRadius:10, height:70, width:70, backgroundColor:'red'}}>
                                        <Image source={{uri:item.hotel_img}} style={{height:75, width:70, borderRadius:10}}/>
                                    </View>
                                    <View style={{paddingHorizontal:5,paddingVertical:1, marginVertical:1, marginHorizontal:3,width:'75%'}}>
                                        <View style={{justifyContent:'space-between', flexDirection: 'row'}}>
                                            <Text style={{fontSize:16, fontWeight:'bold', textTransform:'capitalize'}}>{item.hotel_name}</Text>
                                            <Text>{item.time}</Text>
                                        </View>
                                        <View style={{paddingHorizontal:5,paddingVertical:1, marginVertical:1, marginHorizontal:3,width:'75%'}}>
                                            <Text>Booking Status: <Text style={{color:'green'}}>{item.booking_status}</Text></Text>
                                            <Text>Nights: {item.no_nights}</Text>
                                            <Text style={{color:'red'}}>{item.check_in_date}-{item.check_out_date}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </View>:

                        <View style={{width: windowWidth, alignItems:'center',justifyContent:'center', marginTop:120}}>

                            <Image source={noData} style={{height:250, width:250}}/>

                            {/* note */}
                            <View style={{ 
                                marginVertical:10, display:'flex',
                                flexDirection: 'row',alignItems:'center',
                                backgroundColor:'#F9F9F9', padding:5,
                                borderRadius:15
                                }}>

                                <Icon 
                                    style={{paddingLeft:5}}
                                    name="info" 
                                    size={20}
                                    color="rgba(0, 0, 0, 0.25)"/>

                                <Text style={{
                                    fontSize:10, 
                                    paddingLeft:5,
                                    color:'rgba(0, 0, 0, 0.45)'
                                    }}>
                                    Bookings empty!! your currently booked places will appear here.
                                </Text>

                            </View>

                    </View>)

                    })}
                    

                    
                </ScrollView>

             </View>
            
        </SafeAreaView>
        
        )
}

export default BookedHotelsScreen