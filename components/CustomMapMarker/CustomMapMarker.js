import React from 'react'
import { View,Text} from 'react-native';
import {Marker} from 'react-native-maps';
// icons
import Icons from 'react-native-vector-icons/FontAwesome5'


const CustomMapMarker = (props) => {

    const {coordinate, price, onPress, isSelected} = props;

    return (
        <Marker
                coordinate={coordinate} onPress={onPress}
                >

                <View style={{backgroundColor: isSelected ? '#000' :'white', padding:8, borderRadius:20, borderWidth:0.5,textAlign:'center',     alignItems:'center', borderColor:'grey', elevation:8, color: isSelected?'white':'black', width: 90, marginHorizontal: 10}}>

                    <View style={{justifyContent: 'center', alignItems:'center', textAlign:'center',padding:2, fontWeight:'800'}}>
                        <Icons name='hotel' size={28} color={isSelected?'white':'red'} style={{textAlign:'center', alignItems:'center'}}/>
                        <Text style={{padding:5, fontWeight:'800', color:isSelected?'white':'black'}}>{price}</Text>
                    </View>

                </View>
                
            </Marker>
    )
}

export default CustomMapMarker
