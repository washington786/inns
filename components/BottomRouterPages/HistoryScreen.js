import React,{ useState,useEffect} from 'react'
import { SafeAreaView,View,Text, Dimensions,ScrollView,TouchableOpacity,Image, ToastAndroid } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {db} from '../firebase-config';

// image
import noData from '../Images/no_data.svg'
// import MapCarousel from '../MapCarousel/MapCarousel'

const HistoryScreen = ({navigation}) => {

    const windowWidth = Dimensions.get('screen').width;
    const windowHeight = Dimensions.get('screen').height;

    const [bookingsHistory,setBookingsHistory] =  useState([]);

    useEffect(()=>{
        db.ref('/bookings/').on('value',snap=>{
            const bookingHistoryList = [];

            const info = snap.val();

            for(let k in info){
                bookingHistoryList.push({
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
            setBookingsHistory(bookingHistoryList);
        })

    },[])

    const handleHistoryDelete=()=>{
        {
            bookingsHistory.map((item)=>{
                db.ref('bookings').child(item.key).remove().then(
                    ToastAndroid.show('You successfully deleted your history item!', 2000),
                    navigation.navigate('bottomTabsScreen')
                ).catch(
                    ToastAndroid.show('Failed to delete history item',2000)
                )
            })
        }
    }

    return (
        <SafeAreaView style={{backgroundColor: 'white', height: windowHeight, width: windowWidth}}>

             <View style={{backgroundColor: 'white', height: windowHeight, width: windowWidth, flex: 1}}>

                 {/* tool bar */}
                <View style={{
                display:'flex',
                flexDirection: 'row',alignItems:'center', borderBottomWidth: 1, borderBottomColor:'rgba(0, 0, 0, 0.1)'}}>

                    <View style={{justifyContent: 'center', width: '100%',  backgroundColor:'#F9F9F9'}}>
                        <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',paddingBottom: 5,paddingTop:10,marginVertical:10, }}>My History</Text>
                    </View>

                </View>

                <ScrollView style={{height:windowHeight, width:windowWidth, backgroundColor:'#eee'}}>
                    {bookingsHistory.map((item)=>{
                        {/* console.log(item) */}
                        return(
                            item.booking_status==="Checked Out"?
                            <View style={{backgroundColor:'#fff', marginVertical:10, height:83, padding:5,flexDirection:'row', marginHorizontal: 20, elevation:3, position:'relative'}}>
                                    <View style={{paddingHorizontal:5,paddingVertical:1, marginVertical:1, marginHorizontal:3,width:'95%'}}>
                                        <View style={{justifyContent:'space-between', flexDirection: 'row', }}>
                                            <Text style={{fontSize:16, fontWeight:'bold', textTransform:'capitalize'}}>{item.hotel_name}</Text>
                                            <Text>{item.time}</Text>
                                        </View>
                                        <View style={{paddingHorizontal:5,paddingVertical:1, marginVertical:1, marginHorizontal:3,width:'75%'}}>
                                            <Text><Text style={{color:'red'}}>{item.booking_status}</Text></Text>
                                            <Text>Check Out: {item.check_out_date}</Text>
                                            <Text>R{item.total_price}</Text>
                                        </View>
                                    </View>
                                    <Icons name='delete-circle-outline' size={40} color='red' style={{position:'absolute',bottom:5, right:20}} onPress={handleHistoryDelete}/>
                                </View>:
                            <View style={{width: windowWidth, alignItems:'center',justifyContent:'center', marginTop:120}}>

                                <Image source={noData} style={{height:150, width:150}}/>

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
                                        History empty!! your old booked places will appear here.
                                    </Text>

                                </View> 

                            </View>
                        )
                    })}
                </ScrollView>
                    
             </View>
            
        </SafeAreaView>
    )
}

export default HistoryScreen