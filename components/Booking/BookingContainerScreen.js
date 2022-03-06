import React,{ useState,useRef } from 'react'
import { SafeAreaView, ScrollView, Text,View,TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
// import Datepicker from 'react-native-datepicker'
import DateTimePicker from '@react-native-community/datetimepicker';
import FontIcons from 'react-native-vector-icons/Ionicons';
import FonIcons from 'react-native-vector-icons/Fontisto'
import RBSheet from "react-native-raw-bottom-sheet";
import PaymentBottomSheet from '../BottomPaymentSheet/PaymentBottomSheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {db} from '../firebase-config';

// moment
import Moment from 'react-moment';
import moment from 'moment';


const BookingContainerScreen = ({navigation,route}) => {

    const {room} = route.params;
    const {hotel} = route.params

    const refRBSheet = useRef();

    const [checkInDate, setCheckInDate] = useState(new Date());
    const [mode, setMode] = useState('checkInDate');
    const [show, setShow] = useState(false);
    const [dateText, setDateText] = useState('Select Date')

     const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || checkInDate;
        setShow(Platform.OS === 'ios');
        setCheckInDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setDateText(fDate);
    };

     const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    // number of guests code 
    const [noAdults, setNoAdults] = useState(0);
    const [noChild, setNoChild] = useState(0);
    const [noNights, setNoNights] = useState(1);
    const [note,setNote] = useState('');

    const checkOutDate = moment(checkInDate).add(noNights,'days').format('DD-MMM-YYYY');

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
                            onPress={() =>('')}
                            >
                            <Icons name="keyboard-backspace" size={28} color="#000"/>
                        </TouchableOpacity>

                        <View style={{justifyContent: 'center', width: '100%', flex:1}}>
                            <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',}}>Book A Place</Text>
                        </View>

                    </View>

                    {/* instructions */}
                    <View style={{marginHorizontal: 20, 
                        marginVertical:10, display:'flex',
                        flexDirection: 'row',alignItems:'center',
                        backgroundColor:'#F9F9F9', padding:5,
                        borderRadius:15
                        }}>

                        <Icons 
                            style={{paddingLeft:5}}
                            name="info" 
                            size={20}
                            color="rgba(0, 0, 0, 0.25)"/>

                        <Text style={{
                            fontSize:10, 
                            paddingLeft:5,
                            color:'rgba(0, 0, 0, 0.45)'
                            }}>
                            every booking you create request that you pay immediately.
                        </Text>

                    </View>

                    {/* date pickers */}
                    <View style={{marginHorizontal: 20, 
                        marginVertical:10, display:'flex',
                        flexDirection: 'column',alignItems:'flex-start',
                        backgroundColor:'#F9F9F9', padding:5,
                        borderRadius:2
                        }}>

                        <Text style={{fontSize:14, 
                            paddingLeft:5,
                            color:'rgba(0, 0, 0, 0.45)'}}>Check-in Date</Text>

                        <View style={{
                        marginVertical:5, display:'flex',
                        flexDirection: 'row',alignItems:'center',
                        backgroundColor:'white', padding:5,
                        borderRadius:2, width:'100%', height:40, elevation: 6
                        }} >
                            <Icons name='date-range' size={20} style={{marginHorizontal: 10}}/>

                            <Text style={{marginHorizontal: 15}}>{dateText}{show &&(<DateTimePicker
                                value={checkInDate}
                                mode = {mode}
                                display='calendar'
                                onChange={onChange}
                            />)}</Text>

                            <TouchableOpacity style={{width:'50%'}} onPress={showDatepicker}>

                                <Text style={{marginHorizontal: 10, 
                                    alignSelf:'flex-end', justifyContent: 'flex-end', 
                                    alignItems:'flex-end', alignContent:'flex-end', textAlign:'right'
                                    }}>
                                    <FontIcons name='chevron-down-circle' size={20} style={{marginHorizontal: 10, 
                                    }}/>
                                </Text>

                            </TouchableOpacity>
                            
                        </View>
                        
                    </View>

                    {/* number of guests in their category */}
                    <View style={{marginHorizontal: 20, 
                        marginVertical:10, display:'flex',
                        flexDirection: 'column',alignItems:'flex-start',
                        backgroundColor:'#F9F9F9', padding:5,
                        borderRadius:2
                        }}>

                        <Text style={{fontSize:14, 
                            paddingLeft:5,
                            color:'rgba(0, 0, 0, 0.45)'}}>Number of Guests</Text>

                        <View style={{
                            marginVertical:5, display:'flex',
                            flexDirection: 'row',alignItems:'center',
                            backgroundColor:'white', padding:5,
                            borderRadius:2, width:'100%', height:40, elevation: 6
                            }} >

                            <FontIcons name='md-person-add' size={20} style={{marginHorizontal: 10}}/>
                            <View style={{paddingHorizontal:5}}>
                                <Text style={{fontSize:12, fontWeight: 'bold'}}>Adults</Text>
                                <Text style={{fontSize:10}}>ages 18 or above</Text>
                            </View>

                            <View style={{width:'50%', alignItems:'center', display: 'flex', flexDirection:'row', 
                            justifyContent: 'flex-end', alignContent:'space-between'}}>

                                <TouchableOpacity
                                    onPress={() =>setNoAdults(Math.max(0,noAdults-1))}
                                    style={{backgroundColor:'#C99E30', borderRadius:25, width:30, 
                                    height:30, textAlign:'center', alignItems:'center', justifyContent: 'center'}}
                                    >
                                    <Text style={{textAlign:'center', 
                                    alignItems:'center', justifyContent: 'center', color:'white', fontWeight: 'bold', fontSize:18}}>-</Text>

                                </TouchableOpacity>

                                <Text style={{paddingHorizontal:20}}>{noAdults}</Text>
                                
                                <TouchableOpacity
                                    onPress={() =>setNoAdults(Math.max(0,noAdults+1))}
                                    style={{backgroundColor:'#C99E30', borderRadius:25, width:30, 
                                    height:30, textAlign:'center', alignItems:'center', justifyContent: 'center'}}
                                    >

                                        <Text style={{textAlign:'center', 
                                    alignItems:'center', justifyContent: 'center', color:'white', fontWeight: 'bold', fontSize:18}}>+</Text>

                                </TouchableOpacity>
                                
                            </View>

                        </View>

                        <View style={{
                            marginVertical:5, display:'flex',
                            flexDirection: 'row',alignItems:'center',
                            backgroundColor:'white', padding:5,
                            borderRadius:2, width:'100%', height:40, elevation: 6
                            }} >

                            <FontIcons name='md-person-add' size={20} style={{marginHorizontal: 10}}/>
                            <View style={{paddingHorizontal:5}}>
                                <Text style={{fontSize:12, fontWeight: 'bold'}}>Children</Text>
                                <Text style={{fontSize:10}}>ages 17 or below</Text>
                            </View>

                            <View style={{width:'50%', alignItems:'center', display: 'flex', flexDirection:'row', 
                            justifyContent: 'flex-end', alignContent:'space-between'}}>

                                <TouchableOpacity
                                    onPress={() =>setNoChild((Math.max(0,noChild-1)))}
                                    style={{backgroundColor:'#C99E30', borderRadius:25, width:30, 
                                    height:30, textAlign:'center', alignItems:'center', justifyContent: 'center'}}
                                    >
                                    <Text style={{textAlign:'center', 
                                    alignItems:'center', justifyContent: 'center', color:'white', fontWeight: 'bold', fontSize:18}}>-</Text>

                                </TouchableOpacity>

                                <Text style={{paddingHorizontal:20}}>{noChild}</Text>
                                
                                <TouchableOpacity
                                    onPress={() =>setNoChild(noChild+1)}
                                    style={{backgroundColor:'#C99E30', borderRadius:25, width:30, 
                                    height:30, textAlign:'center', alignItems:'center', justifyContent: 'center'}}
                                    >

                                        <Text style={{textAlign:'center', 
                                    alignItems:'center', justifyContent: 'center', color:'white', fontWeight: 'bold', fontSize:18}}>+</Text>

                                </TouchableOpacity>
                                
                            </View>

                        </View>

                    </View>

                    {/* number of nights */}
                    <View style={{marginHorizontal: 20, 
                        marginVertical:10, display:'flex',
                        flexDirection: 'column',alignItems:'flex-start',
                        backgroundColor:'#F9F9F9', padding:5,
                        borderRadius:2
                        }}>

                        <Text style={{fontSize:14, 
                            paddingLeft:5,
                            color:'rgba(0, 0, 0, 0.45)'}}>Number of nights</Text>

                        <View style={{
                            marginVertical:5, display:'flex',
                            flexDirection: 'row',alignItems:'center',
                            backgroundColor:'white', padding:5,
                            borderRadius:2, width:'100%', height:40, elevation: 6
                            }} >

                            <Icons name='nights-stay' size={20} style={{marginHorizontal: 10}}/>
                            
                            <View style={{paddingHorizontal:5}}>
                                <Text style={{fontSize:12, fontWeight: 'bold'}}>Nights</Text>
                                <Text style={{fontSize:10, color:'#fff'}}>A Max of 5rooms</Text>
                            </View>

                            <View style={{width:'50%', alignItems:'center', display: 'flex', flexDirection:'row', 
                            justifyContent: 'flex-end', alignContent:'space-between'}}>

                                <TouchableOpacity
                                    onPress={() =>setNoNights(Math.max(1, noNights-1))}
                                    style={{backgroundColor:'#C99E30', borderRadius:25, width:30, 
                                    height:30, textAlign:'center', alignItems:'center', justifyContent: 'center'}}
                                    >

                                    <Text style={{textAlign:'center', 
                                    alignItems:'center', justifyContent: 'center', color:'white', fontWeight: 'bold', fontSize:18}}>-</Text>

                                </TouchableOpacity>

                                <Text style={{paddingHorizontal:20}}>{noNights}</Text>
                                
                                <TouchableOpacity
                                    onPress={() =>setNoNights(noNights+1)}
                                    style={{backgroundColor:'#C99E30', borderRadius:25, width:30, 
                                    height:30, textAlign:'center', alignItems:'center', justifyContent: 'center'}}
                                    >

                                        <Text style={{textAlign:'center', 
                                        alignItems:'center', justifyContent: 'center', color:'white', fontWeight: 'bold', fontSize:18}}>+</Text>

                                </TouchableOpacity>
                                
                            </View>

                        </View>

                    </View>

                    {/* special note to the hotel */}
                    <View style={{marginHorizontal: 20, 
                        marginVertical:10, display:'flex',
                        flexDirection: 'column',alignItems:'flex-start',
                        backgroundColor:'#F9F9F9', padding:5,
                        borderRadius:2
                        }}>

                        <Text style={{fontSize:14, 
                            paddingLeft:5,
                            color:'rgba(0, 0, 0, 0.45)'}}>Special Note To Admin</Text>

                        <View style={{
                            width: '100%', height: 100,backgroundColor: '#F9F9F9',borderRadius:5,shadowColor:'#000',
                            shadowOffset:{width:0,height:3},shadowOpacity:0.27,shadowRadius:4.65,elevation:6,
                            paddingHorizontal:10,display: 'flex',flexDirection: 'row',padding:10,
                            alignItems:'center',marginTop: 10}}>

                            <Icons
                                color='rgba(0, 0, 0, 0.25)'
                                name='description'
                                type='font-awesome'
                                size={20}
                            />

                            <TextInput
                                placeholder={'Enter your message here.'}
                                multiline={true}
                                onChangeText={(text)=>setNote(text)}
                                value={note}
                            />

                        </View>
                        
                    
                    </View>   

                    {/* button */}
                    <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', margin: 10, width: '60%',top: 10}}>
                        <TouchableOpacity style={styles.buttonCustom}
                        // onPress={() => refRBSheet.current.open()}
                        onPress={() =>navigation.navigate('bookingConfirmationScreen',{room,hotel,note:note,noNights:noNights,noChild:noChild,noAdults:noAdults,checkInDate:checkInDate,checkOutDate:checkOutDate})}
                        ><Text style={styles.buttonText}>CONTINUE</Text></TouchableOpacity>
                    </View>

                    {/* bottom sheet */}
                     <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:'white',
                    }}>

                        <RBSheet
                            ref={refRBSheet}
                            closeOnDragDown={true}
                            closeOnPressMask={true}
                            height={170}
                            customStyles={{
                            wrapper: {
                                backgroundColor: "rgba(0, 0, 0, 0.45)"
                            },
                            draggableIcon: {
                                backgroundColor: "rgba(0, 0, 0, 0.45)"
                            },
                            container:{
                                backgroundColor:'#fff', 
                                borderTopEndRadius: 25,
                                borderTopStartRadius: 25
                                
                            }
                            }}
                            >

                            <View style={{backgroundColor: 'transparent',
                                height: '100%', marginVertical: 5, marginHorizontal:20}}>

                                    <Text style={{textAlign: 'center', fontSize:14, marginBottom: 5}}>Choose Method:</Text>

                    

                                <View>

                                    <TouchableOpacity
                                         onPress={() =>{navigation.navigate('existingCardScreen')}}
                                        >

                                        <View style={{width: '100%',backgroundColor: '#F9F9F9',borderRadius:5,shadowColor:'#000',
                                        shadowOffset:{width:0,height:3},shadowOpacity:0.27,shadowRadius:4.65,elevation:0,
                                        paddingHorizontal:10,display: 'flex',flexDirection: 'row',padding:10,
                                        alignItems:'center'}}>

                                            <Icon
                                                color='rgba(0, 0, 0, 0.25)'
                                                name='credit-card-check'
                                                size={20}
                                            />

                                            <Text style={{fontSize: 14, fontWeight: 'bold', paddingLeft: 10}}>Use Existing Card</Text>

                                        </View>

                                    </TouchableOpacity>
                        

                                    <TouchableOpacity
                                        onPress={() =>{navigation.navigate('addCardScreen')}}
                                        >

                                        <View style={{width: '100%',backgroundColor: '#F9F9F9',borderRadius:5,shadowColor:'#000',
                                        shadowOffset:{width:0,height:3},shadowOpacity:0.27,shadowRadius:4.65,elevation:0,
                                        paddingHorizontal:10,display: 'flex',flexDirection: 'row',padding:10,
                                        alignItems:'center', marginTop:10}}>

                                            <Icon
                                                color='rgba(0, 0, 0, 0.25)'
                                                name='credit-card-plus'
                                                size={20}
                                            />

                                            <Text style={{fontSize: 14, fontWeight: 'bold', paddingLeft: 10}}>Add New Card</Text>

                                        </View>
                                    
                                    </TouchableOpacity>

                                </View>

                        </View>
                                        
                        </RBSheet>

                    </View>
                    
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
        backgroundColor: '#C99E30',
        borderRadius: 5,
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

export default BookingContainerScreen
