import React from 'react'
import { SafeAreaView,View,Text, Dimensions,ScrollView,TouchableOpacity,Image } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'

// image
import noData from '../Images/empty.png'

const BookedHotelsScreen = () => {

    const windowWidth = Dimensions.get('screen').width;
    const windowHeight = Dimensions.get('screen').height;

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

                    </View>



             </View>
            
        </SafeAreaView>
        
        )
}

export default BookedHotelsScreen