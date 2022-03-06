import React,{useState,useEffect} from 'react';
import { SafeAreaView,View,Text, Dimensions,TouchableOpacity,StyleSheet,ScrollView, ActivityIndicator,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Ico from 'react-native-vector-icons/Fontisto';
import testImage from '../Images/dash/bedroom.jpg';
import { Image } from 'react-native';
import {db, auth} from '../firebase-config';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const SelectedHotelDetails = ({navigation, route}) => {
    
    const {hotel} = route.params;
    const [room, setRoom] = useState([]);

    // image carousel
    const images = [
        hotel.display_image_url,
        hotel.img1,
        hotel.img3,
        hotel.img2,
    ]

    const [imgActive, setImgActive] = useState(0);

    onChange=(nativeEvent)=>{
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if(slide!=imgActive){
                setImgActive(slide);
            }
        }
    }
    
    const id = hotel.key;
    
    useEffect(() => {

        db.ref(`/hotels/${id}/rooms/`).on('value',snap=>{
            
            const roomList =[];
            const info = snap.val();

            for(let y in info){
                roomList.push({
                    air_con: info[y].air_conditions,
                    ds: info[y].dstv,
                    flatScreen: info[y].flat_screen_tv,
                    fridge: info[y].fridge,
                    image_1: info[y].image_url_1,
                    image_2: info[y].image_url_2,
                    image_3: info[y].image_url_3,
                    iron_and_board: info[y].iron_and_iron_board,
                    room_description: info[y].room_description,
                    roomName: info[y].room_name,
                    roomNo: info[y].room_no,
                    roomPrice: info[y].room_price,
                    roomType: info[y].room_type,
                    studyChairs: info[y].study_chairs,
                    studyDesk: info[y].study_desk,
                    towelsToiletries: info[y].towels_toiletries,
                    key:y,
                })
            }
            setRoom(roomList);
        })
    },[])


    const [submitSpinner, setSubmitSpinner] = React.useState(false);

    const Card =(room)=>{
        return(
        <TouchableOpacity onPress={()=>navigation.navigate('roomDetailsScreen',{room,hotel})}>
            <View style={styles.roomsContainer}>
                <View style={{backgroundColor:'#5eeeee',width:'100%', height: windowHeight*0.09}}>
                    <Image source={{uri:room.room.image_1}} style={{width:'100%', height: windowHeight*0.09}}/>
                </View>

                <Text style={{marginVertical: 4, marginHorizontal: 6, color:'#000'}}>{room.room.roomName}</Text>
                <View style={{marginVertical: -2, marginHorizontal: 6,color:'#000'}}>

                    <Text>R{room.room.roomPrice}</Text>

                    <Text>{room.room.roomType}</Text>

                </View>
            </View>
        </TouchableOpacity>)
    }
    
    return (
        <SafeAreaView style={{backgroundColor: 'white', height: windowHeight, width: windowWidth}}>
            <View style={{backgroundColor: 'white', height: windowHeight, width: windowWidth, flex: 1}}>
                <View style={{
                    display:'flex',
                    flexDirection: 'column',alignItems:'flex-start',backgroundColor: '#F3F3F3', height:windowHeight*0.35, elevation:5}}>
                        <View style={styles.wrap}>
                            <ScrollView
                                onScroll={({nativeEvent})=>onChange(nativeEvent)}
                                showsHorizontalScrollIndicator={false}
                                paddingEnabled
                                horizontal
                                style={styles.wrap}
                            >

                                {
                                    images.map((e, index)=>
                                        <Image
                                        key={e}
                                        resizeMode='stretch'
                                        style={styles.wrap}
                                        source={{uri: e}}
                                        />
                                    )
                                }

                            </ScrollView>
                            {/* d0ts */}
                            <View style={styles.wrapDot}>

                                {
                                    images.map((e, index) =>
                                        <Text key={e} style={imgActive == index ? styles.dotActive : styles.dot}>●</Text>
                                    )
                                }

                            </View>
                        </View>
                        {/* <Image source={testImage} style={{resizeMode:'cover', height:windowHeight*0.4, width:windowWidth}}/> */}
                        <TouchableOpacity
                        style={{position:'absolute',display:'flex',top:8, paddingLeft:5, left: 4}}
                            onPress={() =>navigation.navigate('Dashboard')}
                            >
                            <View style={{backgroundColor:'#Fff', borderRadius:70, width: 40, height:40, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                                <Icons name="keyboard-backspace" size={28} color="#000"/>
                            </View>
                            
                        </TouchableOpacity>
                    </View>
                    
                    {/* hotel details */}
                    <View style={styles.details}>
                        <Text>
                            <Ico name={'hotel'} size={20} color='#000000' style={{paddingRight:10}}/>
                            <Text style={styles.hotelName}>   {hotel.name}</Text>
                        </Text>
                    </View>

                    <View style={styles.hotelDetails}>

                        <Text>
                            <Icons name='location-pin' size={20} color='red' style={{paddingRight:10}}/>
                            <Text>{hotel.suburb}, {hotel.town}, {hotel.province}</Text>
                        </Text>

                        <Text style={styles.price}>{hotel.description}</Text>

                        <View style={styles.featuresContainer}>

                                <View style={styles.features}>
                                    <Icons name='wifi' size={20} />
                                    {hotel.wifi? <Text style={{padding:2}}>available</Text>:<Text style={{padding:2,textDecorationLine: 'line-through',color:'red'}}>Unavailable</Text>}
                                </View>

                                <View style={styles.features}>
                                    <Icons name='smoking-rooms' size={20} />
                                    {hotel.smoking_room? <Text style={{padding:2}}>available</Text>:<Text style={{padding:2,textDecorationLine: 'line-through',color:'red'}}>Unavailable</Text>}
                                </View>

                                <View style={styles.features}>
                                    <Icons name='fitness-center' size={20} />
                                    {hotel.fitness? <Text style={{padding:2}}>available</Text>:<Text style={{padding:2,textDecorationLine: 'line-through',color:'red'}}>Unavailable</Text>}
                                </View>

                                  
                        </View>

                        <View style={styles.featuresContainer}>

                                <View style={styles.features}>
                                    <Icons name='pool' size={20} />
                                    {hotel.swimming? <Text style={{padding:2}}>available</Text>:<Text style={{padding:2,textDecorationLine: 'line-through',color:'red'}}>Unavailable</Text>}
                                </View>

                                <View style={styles.features}>
                                    <Icons name='local-parking' size={20} />
                                    {hotel.parking?<Text style={{padding:2}}>available</Text>:<Text style={{padding:2,textDecorationLine: 'line-through',color:'red'}}>unavailable</Text>}
                                </View>

                                <View style={styles.features}>
                                    <Icons name='pets' size={20} />
                                    {hotel.pet?<Text style={{padding:2}}>Friendly</Text>:<Text style={{padding:2,textDecorationLine: 'line-through',color:'red'}}>Unfriendly</Text>}
                                </View>

                        </View>

                    </View>

                    {/* hotel rooms */}
                    <View style={{marginVertical:5}}>

                        <Text style={{paddingLeft:5, marginLeft:8,paddingTop:4,marginTop:4, textAlign: 'left', fontWeight:'bold', fontSize:16}}>Rooms</Text>
                        
                            <View style={styles.room}>
                                <FlatList
                                    data={room}
                                    Horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({item})=><Card room={item}/>}
                                />

                            </View>

                    </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrap:{
        height:windowHeight*0.35, 
        width:windowWidth
    },
    wrapDot:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center'

    },
    dotActive:{
        margin:3,
        color:'white'
    },
    dot:{
        margin:3,
        color:'grey'
    },
    details:{
        marginHorizontal: 15,
        marginVertical:15,
    },
    hotelName:{
        fontSize:25,
        fontWeight:'bold',
        paddingLeft: 10
    },
    hotelDetails:{
        marginVertical:-4, 
        display:'flex',
        alignItems:'flex-start',
        backgroundColor:'white', 
        padding:5,
        borderRadius:1, 
        elevation: 2,
        marginHorizontal:15,
        textAlign:'center',
        justifyContent: 'flex-start'
    },
    price:{
        paddingLeft: 5,
        marginTop:2,
        fontWeight: 'normal',
        textAlign: 'justify',
        color: '#808080',
        // borderBottomWidth: 1,
        // borderBottomColor: 'grey'
    },
    featuresContainer:{
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 2,
        marginVertical:0,
        justifyContent: 'center',
        alignItems:'center',
        textAlign: 'center',
    },
    features:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:'#EDEDED',
        justifyContent: 'center',
        alignItems:'center',
        textAlign: 'center',
        elevation: 2,
        width:windowWidth*0.25,
        padding:8,
        margin:8
    },
    updateButton:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        paddingVertical: 10,
        paddingHorizontal:10,
        borderRadius:5,
        elevation:2,
        shadowColor:'#000',
        shadowOffset:{width:2, height:2},
        shadowOpacity: 0.25,
        shadowRadius:3.5,
        backgroundColor:'#F6C954',
        textAlign:'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        marginVertical:20,
    },
    buttonText:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',

    },
    roomsContainer:{
        marginVertical:10, 
        display:'flex',
        alignItems:'flex-start',
        backgroundColor:'white',
        borderRadius:10, 
        elevation: 1,
        marginHorizontal:15,
        textAlign:'center',
        justifyContent: 'flex-start',
        width:windowWidth*0.45,
        height: windowHeight*0.17,
    },
    room:{
        marginVertical:5, 
        // display:'flex',
        // flexDirection:'row',
        // alignItems:'flex-start',
        backgroundColor:'white',
        borderRadius:10, 
        // marginHorizontal:5,
        // textAlign:'center',
        // justifyContent: 'flex-start',
        height: windowHeight*0.19
    },
});

export default SelectedHotelDetails
