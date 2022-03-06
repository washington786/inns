import React from 'react'
import { Image } from 'react-native';
import { SafeAreaView,Text,Dimensions, View,StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Fontisto';
import Ico from 'react-native-vector-icons/Ionicons';
import Mats from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MdIron } from 'react-icons/fa';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const RoomDetailsScreen = ({navigation,route}) => {

  const {room} = route.params;
  const {hotel} = route.params;

  return (
    <SafeAreaView>
        <View style={{height: height, width: width}}>
            <View style={styles.imgCon}>
                <Image source={{uri:room.room.image_1}} style={styles.img}/>

                <TouchableOpacity style={{position:'absolute', zIndex: 0}}>
                    <Ico name="md-arrow-back-circle" size={40} color="#fff" style={{position:'absolute', top: 7, left: 6, zIndex: 500}}/>
                </TouchableOpacity>

                <View style={{flexDirection: 'row',alignItems:'center', position: 'absolute',bottom:-60, justifyContent: 'center', alignItems: 'center',left:15}}>
                    
                    <TouchableOpacity onPress={()=>navigation.navigate('roomImageFullScreen',{room})}>
                        <View style={{marginVertical:10, marginHorizontal: 10, elevation: 2, backgroundColor: '#eee', width: width* 0.4, height: height*0.15, borderRadius:20}}>
                            <Image source={{uri:room.room.image_2}} style={{width: width* 0.4, height: height*0.15, borderRadius:20}}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate('roomImageFullScreen',{room})}>
                        <View style={{marginVertical:10, marginHorizontal: 10, elevation: 2, backgroundColor: '#eee', width: width* 0.4, height: height*0.15, borderRadius:20}}>
                            <Image source={{uri:room.room.image_3}} style={{width: width* 0.4, height: height*0.15, borderRadius:20}}/>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.roomConDetails}>
                {/* top con of the view: room:name and price */}
                <View style={{display: 'flex', flexDirection: 'row',alignItems:'flex-start', position:'relative'}}>

                    <View style={{display: 'flex', flexDirection:'row', alignItems:'center', marginVertical: 10,marginHorizontal: 10,         alignSelf:'center'}}>
                        <Icons name={'room'} size={26} color='#000000' style={{paddingRight:10}}/>
                        <Text style={{paddingTop:10, fontSize: 16}}>{room.room.roomName}{"\n"}{room.room.roomNo}</Text>
                    </View>

                    <View style={{display: 'flex', flexDirection:'row', alignItems:'center', marginVertical: 10,marginHorizontal: 10,         alignSelf:'center', position: 'absolute', right:10}}>
                        <Text style={{paddingTop:10, fontSize: 16, color:'#333'}}>R{room.room.roomPrice}</Text>
                    </View>

                </View>

                {/* middle con of the view: description*/}
                <View style={{marginHorizontal:10}}>
                    <Text style={{marginTop:2, textAlign:'justify'}}>{room.room.room_description}</Text>
                </View>

                {/* facilities con */}
                <View style={{marginHorizontal:10, height: height*0.19, marginVertical: 10, display:'flex'}}>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        <View style={{backgroundColor: '#eee', elevation:2, justifyContent: 'center', alignItems:'center', width: width*0.2, height: height*0.07, marginHorizontal: 1, marginVertical:3, borderRadius:4}}>
                            <Mats name={'bathtub'} size={26} color='#333' style={{paddingRight:10}}/>
                            {room.room.towelsToiletries?<Text style={{fontSize: 13}}>available</Text>:<Text style={{fontSize: 13, color:'#FF0000',textDecorationLine: 'line-through'}}>unavailable</Text>}
                        </View>

                        <View style={{backgroundColor: '#eee', elevation:2, justifyContent: 'center', alignItems:'center', width: width*0.2, height: height*0.07, marginHorizontal: 3, marginVertical:3, borderRadius:4, marginLeft: 10}}>
                            <Icon name={'table-chair'} size={26} color='#333' style={{paddingRight:10}}/>
                            {room.room.studyChairs && room.room.studyDesk?<Text style={{fontSize: 13}}>available</Text>:<Text style={{fontSize: 13, color:'#FF0000',textDecorationLine: 'line-through'}}>unavailable</Text>}
                        </View>

                        <View style={{backgroundColor: '#eee', elevation:2, justifyContent: 'center', alignItems:'center', width: width*0.2, height: height*0.07, marginHorizontal: 3, marginVertical:3, borderRadius:4, marginLeft: 5}}>
                            <Icon name={'air-conditioner'} size={26} color='#333' style={{paddingRight:10}}/>
                            {room.room.air_con?<Text style={{fontSize: 13}}>available</Text>:<Text style={{fontSize: 13, color:'#FF0000',textDecorationLine: 'line-through'}}>unavailable</Text>}
                        </View>

                        <View style={{backgroundColor: '#eee', elevation:2, justifyContent: 'center', alignItems:'center', width: width*0.2, height: height*0.07, marginHorizontal: 3, marginVertical:3, borderRadius:4, marginLeft: 5}}>
                            <Icon name={'fridge'} size={26} color='#333' style={{paddingRight:10}}/>
                            {room.room.fridge?<Text style={{fontSize: 13}}>available</Text>:<Text style={{fontSize: 13, color:'#FF0000',textDecorationLine: 'line-through'}}>unavailable</Text>}
                        </View>
                    </View>

                    <View style={{display:'flex', flexDirection:'row', marginVertical: 7}}>
                        <View style={{backgroundColor: '#eee', elevation:2, justifyContent: 'center', alignItems:'center', width: width*0.2, height: height*0.07, marginHorizontal: 1, marginVertical:3, borderRadius:4}}>
                            <Ico name={'tv-sharp'} size={26} color='#333' style={{paddingRight:10}}/>
                            {room.room.ds&&room.room.flatScreen?<Text style={{fontSize: 13}}>available</Text>:<Text style={{fontSize: 13, color:'#FF0000',textDecorationLine: 'line-through'}}>unavailable</Text>}
                        </View>

                        <View style={{backgroundColor: '#eee', elevation:2, justifyContent: 'center', alignItems:'center', width: width*0.2, height: height*0.07, marginHorizontal: 3, marginVertical:3, borderRadius:4, marginLeft: 10}}>
                            <MaterialCommunityIcons name={'human-baby-changing-table'} size={26} color='#333' style={{paddingRight:10}}/>
                            {room.room.iron_and_board?<Text style={{fontSize: 13}}>available</Text>:<Text style={{fontSize: 13, color:'#FF0000',textDecorationLine: 'line-through'}}>unavailable</Text>}
                        </View>
                    </View>
                    
                </View>


            </View>

            <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', margin: 10, width: '70%',top: 10}}>

                {/* button to sign in */}
                <TouchableOpacity style={styles.buttonCustom}
                onPress={()=>navigation.navigate('bookingScreen', {room, hotel})} 
                ><Text style={styles.buttonText}>BOOK ROOM</Text></TouchableOpacity>
            </View>

        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    imgCon:{
        height: height*0.4,
        width: width,
        backgroundColor: '#526353',
        position: 'relative',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    img:{
        width: width,
        height: height*0.4,
        resizeMode: 'cover',
        flex: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    touch:{
        position: 'relative',
        height: height*0.4,
        width: width,
    },
    roomConDetails:{
        marginVertical: 15,
        marginHorizontal: 15,
        backgroundColor: '#eee',
        height: height*0.4,
        marginTop: 60,
        elevation: 1,
        display: 'flex',
        position: 'relative',
    },
    buttonCustom:{
        width: '100%',
        height: 45,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: 14,
        backgroundColor: '#333',
        borderRadius: 15,
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

export default RoomDetailsScreen