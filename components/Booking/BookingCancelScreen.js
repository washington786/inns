import { View, Text,Dimensions,SafeAreaView,TouchableOpacity,ScrollView,StyleSheet, ToastAndroid} from 'react-native'
import React,{useEffect,useState} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/MaterialIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Z from 'react-native-vector-icons/Zocial';
import {db} from '../firebase-config';


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const radioButtonsData = [{
    id: '1',
    label: 'Wrong Booking Date',
    value: 'booking date'
}, {
    id: '2',
    label: 'Emergency reasons',
    value: 'emergency'
},{
    id: '3',
    label: 'Health Conditions',
    value: 'health'
},{
    id: '4',
    label: 'Low Profile of the hotel',
    value: 'profile'
},{
    id: '5',
    label: 'Hotel services',
    value: 'services'
}
]

const BookingCancelScreen = ({navigation, route}) => {

    const {key} = route.params;
    const {status} = route.params;

    const [radioButtons, setRadioButtons] = useState(radioButtonsData);
    // const reason='';

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
        // reason = radioButtonsArray
    }

    const handleSubmitReason=()=>{
        db.ref('bookings').child(key).update(   
        {
            reason: radioButtonsData,
            booking_status: status
        }).then(
            ToastAndroid.show('Booking cancelled successfully',2000),
            navigation.navigate('bottomTabsScreen')
        ).catch(
            ToastAndroid.show('Failed to submit reason',2000)
        )
    }

  
    // console.log('Cancel booking key:',key);
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
                        <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',color:'#000'}}>Cancellation Reason</Text>
                    </View>
                </View>

                 {/* details*/}
                 <ScrollView style={{height:height, width:width, backgroundColor:'#eee'}}>
                    <View>

                        <RadioGroup 
                            containerStyle={{justifyContent:'flex-start', alignItems:'flex-start', paddingHorizontal: 20, paddingVertical:10}}
                            radioButtons={radioButtons} 
                            onPress={onPressRadioButton} 
                        />

                        <View style={{marginVertical:10,marginHorizontal: 10, width: '95%'}}>
                            <TouchableOpacity
                                    style={styles.Button2}
                                    onPress={handleSubmitReason}
                                    >
                                    <Text style={styles.ButtonText2}>Submit</Text>
                            </TouchableOpacity>
                        </View>

                        {/* <Text>Booking ID: {key}</Text> */}
                    </View>
                 </ScrollView>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default BookingCancelScreen

const styles = StyleSheet.create({
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