import { View, Text,Dimensions,SafeAreaView,TouchableOpacity,ScrollView,StyleSheet, ToastAndroid} from 'react-native'
import React,{useEffect} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Z from 'react-native-vector-icons/Zocial';
import {db} from '../firebase-config';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const BookingDetailsScreen = ({navigation,route}) => {
    
const {bookings} = route.params;

    const handleCheckOut=()=>{
        {bookings.map((item)=>{
            // console.log(item.key);
            const status = "Checked Out";
            db.ref('bookings').child(item.key).update({
               booking_status: status
            }).then(
                ToastAndroid.show('Successfully checked out!',2000),
                navigation.navigate('bottomTabsScreen'),
            )

        })}
        
    }

    const handleCancelBooking=()=>{
        {bookings.map((item)=>{
            // console.log(item.key);
            const status = "Canceled";
            const key = item.key;
            navigation.navigate('cancel',{key,status});
        })}
    }
    
  return (
    <SafeAreaProvider>
        <SafeAreaView style={{height: height, width: width}}>
            <View style={{height: height, width: width,paddingBottom:120}}>
                 {/* tool bar */}
                <View style={{ display:'flex',
                    flexDirection: 'row',alignItems:'center',backgroundColor:'#fff', paddingVertical:20,paddingHorizontal:10}}>

                    <TouchableOpacity
                        onPress={() =>navigation.goBack()}
                        >
                        <Icons name="keyboard-backspace" size={28} color="#000"/>
                    </TouchableOpacity>

                    <View style={{justifyContent: 'center', width: '100%', flex:1}}>
                        <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',color:'#000'}}>Booked Hotel Details</Text>
                    </View>
                </View>

                {/* details*/}
                <ScrollView style={{height:height, width:width, backgroundColor:'#eee'}}>

                            {bookings.map((item,index) => {
                                
                                return(
                                    item.booking_status !=="Checked Out" && item.booking_status !=="Canceled" && item.booking_status !=="Deleted"?
                                <View key={item.key} style={{marginVertical:10,marginHorizontal: 10, backgroundColor:'#fff', width: '95%', height: 400,elevation:2}}>
                                    <View style={{marginHorizontal: 15, marginVertical: 5}}>

                                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>

                                            <Icons name='hotel' size={35} color='grey'/>
                                            <Text style={{paddingLeft: 10, fontWeight: 'bold', fontSize:18}}>{item.hotel_name}</Text>

                                        </View>

                                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', paddingHorizontal:10, paddingVertical:10}}>

                                            <Icons name='pin-drop' size={20} color='red'/>
                                            <Text style={{paddingLeft: 10, fontWeight: '100', fontSize:16}}>{item.hotel_town}</Text>

                                        </View>

                                         <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', paddingHorizontal:10, paddingVertical:10}}>
                                            <Icon name='calendar-check' size={20} color='#333'/>
                                            <Text style={{paddingLeft: 10, fontWeight: '100', fontSize:16}}>Check-In: <Text style={{color:'red'}}>{item.check_in_date}</Text></Text>
                                        </View>

                                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', paddingHorizontal:10, paddingVertical:10}}>
                                            <Icon name='calendar-multiple-check' size={20} color='#333'/>
                                            <Text style={{paddingLeft: 10, fontWeight: '100', fontSize:16}}>Check-Out: <Text style={{color:'red'}}>{item.check_out_date}</Text></Text>
                                        </View>

                                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', paddingHorizontal:10, paddingVertical:10}}>
                                            <Icons name='night-shelter' size={20} color='#333'/>
                                            <Text style={{paddingLeft: 10, fontWeight: '100', fontSize:16}}><Text style={{color:'#333'}}>{item.no_nights}</Text> nights</Text>
                                        </View>

                                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', paddingHorizontal:10, paddingVertical:10}}>
                                            <Z name='guest' size={20} color='#333'/>
                                            <Text style={{paddingLeft: 10, fontWeight: '100', fontSize:16,color:'red'}}><Text style={{color:'#333'}}>{item.no_adults+item.no_children}</Text> Guests(Children&adults)</Text>
                                        </View>

                                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', paddingHorizontal:10, paddingVertical:10}}>
                                            <Icon name='note' size={20} color='#333'/>
                                            <Text style={{paddingLeft: 10, fontWeight: '100', fontSize:16}}><Text style={{color:'#333'}}>{item.note}</Text></Text>
                                        </View>

                                        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'flex-start', paddingHorizontal:10, paddingVertical:10}}>
                                            <View style={{marginVertical:10,marginHorizontal: 10, width: '95%'}}>
                                                <TouchableOpacity
                                                        style={styles.Button}
                                                        onPress={handleCheckOut}
                                                        >
                                                        <Text style={styles.ButtonText}>Check Out</Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={{marginVertical:10,marginHorizontal: 10, width: '95%'}}>
                                                <TouchableOpacity
                                                        style={styles.Button2}
                                                        onPress={handleCancelBooking}
                                                        >
                                                        <Text style={styles.ButtonText2}>Cancel Booking</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </View>
                                </View>:
                                <></>
                                )
                            })}

                </ScrollView>

            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    
  )
}

export default BookingDetailsScreen;

const styles = StyleSheet.create({
    Button:{
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
    ButtonText:{
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    Button2:{
        backgroundColor: '#000',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginLeft: 10,
        elevation: 2,
        shadowColor:'#333',
        shadowOffset: {width:2,height:2},
        shadowOpacity:0.25,
        shadowRadius:3.5,
    },
    ButtonText2:{
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    }
})