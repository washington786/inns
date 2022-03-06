import React from 'react'
import { TouchableOpacity } from 'react-native'
import {View,Text } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'

const GoogleSuggestion = ({item, navigation})=>(
        
    <TouchableOpacity onPress={()=>navigation.navigate('selectedDetailsScreen')}>
         <View style={{display:'flex', flexDirection: 'row',
                alignItems: 'center', borderBottomColor:'rgba(0, 0, 0, 0.1)', 
                borderBottomWidth:1, marginTop:25, zIndex:100
                
                }}>

            <View style={{backgroundColor:'rgba(0, 0, 0, 0.1)', padding:10, margin: 5, borderRadius:10}}>
                
                <Icons
                        color='red'
                        name='location-pin'
                        type='font-awesome'
                        size={20}
                    />

            </View>

            <Text style={{marginLeft:20}}>{item.description}</Text>

        </View>
    </TouchableOpacity>
   
                
                
)

export default GoogleSuggestion
