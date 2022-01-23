import React,{ useState} from 'react'
import { SafeAreaView, ScrollView, Text,View,TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CheckBox } from 'react-native-elements'

const AddNewCardScreen = ({navigation}) => {

    const [checkBoxValue, setCheckBoxValue] = useState(false);
    
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
                            onPress={() =>navigation.navigate('bookingScreen')}
                            >
                            <Icons name="keyboard-backspace" size={28} color="#000"/>
                        </TouchableOpacity>

                        <View style={{justifyContent: 'center', width: '100%', flex:1}}>
                            <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',}}>Add New Card Details</Text>
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
                            Please enter your valid card details to make payments.
                        </Text>

                    </View>

                    <View style={{marginHorizontal: 20, 
                        marginVertical:10, display:'flex',
                        flexDirection: 'row',alignItems:'center',
                        backgroundColor:'#F9F9F9', 
                        borderRadius:10,
                        height: 200
                        }}>

                        <Image
                            style={{width:'100%', height:'100%', resizeMode:'cover',borderRadius:10,justifyContent: 'center'}}
                            source={{uri:'https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_960_720.jpg'}}
                        />

                    </View>

                    <View style={{marginHorizontal: 20, 
                        marginVertical:10, display:'flex',
                        flexDirection: 'column',alignItems:'flex-start',
                        backgroundColor:'#F9F9F9', padding:5,
                        borderRadius:2
                        }}>

                        <Text style={{fontSize:14, 
                            paddingLeft:5,
                            color:'rgba(0, 0, 0, 0.45)'}}>Card Holder Name</Text>

                        <View style={{
                        marginVertical:5, display:'flex',
                        flexDirection: 'row',alignItems:'center',
                        backgroundColor:'white', padding:5,
                        borderRadius:2, width:'100%', height:40, elevation: 2
                        }} >

                            <Icon
                                name='card-account-details'
                                size={20}
                                color='rgba(0, 0, 0, 0.4)'
                            />

                            <TextInput
                                style={{flex: 1, paddingHorizontal: 12}}
                                placeholder={'Enter full names'}
                                textContentType='name'
                            />

                        </View>

                        <Text style={{fontSize:14, 
                            paddingLeft:5,
                            marginTop:10,
                            color:'rgba(0, 0, 0, 0.45)'}}>Credit Card Number</Text>

                        <View style={{
                        marginVertical:5, display:'flex',
                        flexDirection: 'row',alignItems:'center',
                        backgroundColor:'white', padding:5,
                        borderRadius:2, width:'100%', height:40, elevation: 2
                        }} >

                            <Icon
                                name='credit-card-plus'
                                size={20}
                                color='rgba(0, 0, 0, 0.4)'
                            />

                            <TextInput
                                style={{flex: 1, paddingHorizontal: 12}}
                                placeholder={'Enter Card Number'}
                                textContentType='creditCardNumber'
                            />

                        </View>

                        <Text style={{fontSize:14, 
                            paddingLeft:5,
                            marginTop:10,
                            color:'rgba(0, 0, 0, 0.45)'}}>Card Expiry Date</Text>

                        <View style={{
                        marginVertical:5, display:'flex',
                        flexDirection: 'row',alignItems:'center',
                        backgroundColor:'white', padding:5,
                        borderRadius:2, width:'100%', height:40, elevation: 2
                        }} >

                            <Icons
                                name='date-range'
                                size={20}
                                color='rgba(0, 0, 0, 0.4)'
                            />

                            <TextInput
                                style={{flex: 1, paddingHorizontal: 12}}
                                placeholder={'mm/yyyy'}
                                textContentType='creditCardNumber'
                            />

                            <Icon
                                style={{paddingHorizontal:5}}
                                name='chevron-down-box'
                                size={20}
                                color='rgba(0, 0, 0, 0.4)'
                            />

                        </View>

                        <Text style={{fontSize:14, 
                            paddingLeft:5,
                            marginTop:10,
                            color:'rgba(0, 0, 0, 0.45)'}}>Cvv</Text>

                        <View style={{
                        marginVertical:5, display:'flex',
                        flexDirection: 'row',alignItems:'center',
                        backgroundColor:'white', padding:5,
                        borderRadius:2, width:'50%', height:40, elevation: 2
                        }} >

                            <Icons
                                name='verified-user'
                                size={20}
                                color='rgba(0, 0, 0, 0.4)'
                            />

                            <TextInput
                                style={{flex: 1, paddingHorizontal: 12}}
                                placeholder={'Cvv'}
                                textContentType='creditCardNumber'
                            />

                        </View>

                    </View>


                    <View style={{marginHorizontal: 20, 
                        display:'flex',
                        flexDirection: 'column',alignItems:'flex-start',
                        backgroundColor:'transparent', padding:5,
                        borderRadius:2
                        }}>

                        <CheckBox
                            containerStyle={{marginLeft:0, width:'100%'}}
                            title={'Save Details for Future Payments'}
                            checked={checkBoxValue}
                            onPress={() =>setCheckBoxValue(!checkBoxValue)}
                            checkedColor='#17C828'
                            textStyle={{color:'rgba(0, 0, 0, 0.45)'}}
                        />

                    </View>

                     {/* button */}
                    <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', margin: 10, width: '70%',top: 5}}>
                        <TouchableOpacity style={styles.buttonCustom}
                        onPress={() => navigation.navigate('cardAddedSuccessScreen')}
                        ><Text style={styles.buttonText}>CONTINUE</Text></TouchableOpacity>
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

export default AddNewCardScreen
