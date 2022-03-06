import React from 'react'
import { SafeAreaView,View,Text, Dimensions,ScrollView,TouchableOpacity,Image } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'

// image
import noData from '../Images/no_data.svg'
import MapCarousel from '../MapCarousel/MapCarousel'

const HistoryScreen = () => {

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
                            <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',paddingBottom: 5,paddingTop:10,marginVertical:10, }}>My History</Text>
                        </View>

                    </View>

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

                        {/* <View style={{width:windowWidth, height:150}}>

                            <View style={{ height:height*0.15, marginHorizontal: 6, borderRadius:15, display:'flex',flexDirection: 'row',backgroundColor: '#fff',elevation:5}}>

                            <Image style={{width:width*0.4, height:height*0.15, borderRadius:10}} source={test}/>
                            <View style={{marginHorizontal:10, marginVertical:15}}>
                                <View style={{display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'flex-start', alignItems: 'center'}}>
                                    <Icons name='hotel' size={20} color={'grey'}/>
                                    <Text style={{fontWeight: 'bold',fontSize:18,padding:5, letterSpacing:2}}>Takzen Mobe</Text>
                                </View>

                                {/* description */}
                                {/* <Text style={{fontWeight: '100',fontSize:10,letterSpacing:0.5, paddingTop:5, color:'grey', width:width*0.55, paddingVertical:10}}>A sunset nation is glorious, visit to see more even the moonlight.</Text> */}

                                {/* price */}
                                {/* <Text style={{fontWeight: 'bold',fontSize:15,letterSpacing:0.5, paddingTop:5, color:'#C99E30'}}>R1700 / night</Text> */}
                                    
                            {/* </View>

                        </View> */}

                        {/* </View> */} 

                    </View>

                    


             </View>
            
        </SafeAreaView>
    )
}

export default HistoryScreen