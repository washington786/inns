import React from 'react'
import {StyleSheet, View,Image, Text } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons'

// star rating 
import StarRating from 'react-native-star-rating';

const Hotels = (props) => {

    // star rating code
    const hotels = props.hotels;

    return (
        
            <View style={styles.container}>

                {/* image */}
                <Icons
                        name='favorite-outline'
                        size={25}
                        style={{color: 'red',position:'absolute',zIndex: 1, padding:10, alignSelf:'flex-end', alignItems:'flex-end'}}
                    />
                <Image style={styles.image} source={{uri:hotels.image}}/>

                {/* name of the hotel & location */}

                <View style={styles.con}>
                    <View style={styles.hotelName}>
                        <Icons name="hotel" size={30} color='rgba(0, 0, 0, 0.7)'/>
                        <Text style={styles.hotelNameText}>{hotels.name}</Text>
                    </View>
                    
                    <View style={{display: 'flex',
                        flexDirection: 'row',
                        padding: 5,
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',}}>
                        <Text style={{marginLeft:5, fontWeight:'bold', color:'rgba(0, 0, 0, 0.7)', fontSize:13}}>R{hotels.price} 
                            <Text style={{marginLeft:4}}>/Overnight</Text>
                        </Text>
                    </View>
                    
                </View>

                {/* prices */}
                <View style={styles.hotelLocationName}>
                    <Icons name="location-pin" size={20} color='rgba(0, 0, 0, 0.7)'/>
                    <Text style={styles.hotelLocationNameText}>{hotels.city}</Text>
                </View>

            </View>
    )
}

const styles = StyleSheet.create({

    image:{
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
        height: 200,
        backgroundColor:'rgba(0, 0, 0, 0.9)',
    },

    container:{
        margin: 10, 
        backgroundColor: '#F9F9F9',
        borderRadius: 15,
        height: '30%',
        shadowColor:'#000',
        shadowOffset:{width:0,height:3},
        shadowOpacity:0.27,
        shadowRadius:4.65,
        elevation:6,
        marginHorizontal:10,
    },

    hotelName:{
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        marginRight: 35,
        alignSelf: 'center'
    },
    hotelNameText:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        marginLeft: 5,
    },
    hotelLocationName:{
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderBottomColor: 'red',
        borderBottomWidth: 0.3,

    },
    hotelLocationNameText:{
        paddingLeft: 2,
        marginLeft: 2
    },
    con:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        marginRight: 10
    }
    

})

export default Hotels

