import React,{ useRef } from 'react'
import {Text,View,TouchableOpacity, StyleSheet,Button } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const PaymentBottomSheet = ({props}) => {

    const refRBSheet = useRef();
    
    return (
            
           <>
               <View style={{backgroundColor: 'transparent',
                height: '100%', marginVertical: 5, marginHorizontal:20}}>

                    <Text style={{textAlign: 'center', fontSize:14, marginBottom: 5}}>Choose Method:</Text>

                    

                    <View>

                        <TouchableOpacity>

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
                            onPress={() =>{this.props.navigation.navigate('searchInScreen')}}
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
           </> 
    )
}


export default PaymentBottomSheet