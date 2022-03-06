import React,{ useEffect,useState} from 'react'
import {StyleSheet, View,Image, Text,SafeAreaView,TouchableOpacity,FlatList} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {db} from '../firebase-config';


// const id = auth.currentUser.uid;

const Hotels = ({navigation}) => {

    const [hotel,setHotel] = useState([]);

    useEffect(()=>{
        db.ref('/hotels/').on('value',snap=>{
        const hotelList = [];
        const info = snap.val();
        
         for(let x in info){
             hotelList.push({
                breakFast: info[x].breakFast,
                city: info[x].city,
                computer_facility: info[x].computer_facility,
                name: info[x].name,
                phone_no: info[x].phone_no,
                display_image_url: info[x].display_image_url,
                description: info[x].description,
                fitness: info[x].fitness,
                img1: info[x].img1,
                img2: info[x].img2,
                img4: info[x].img4,
                latitude: info[x].latitude,
                longitude: info[x].longitude,
                parking: info[x].parking,
                pet: info[x].pet,
                phone_no: info[x].phone_no,
                province: info[x].province,
                smoking_room: info[x].smoking_room,
                town: info[x].town,
                telephone_no: info[x].telephone_no,
                swimming: info[x].swimming,
                wifi: info[x].wifi,
                suburb: info[x].suburb, 
                key: x
             })
         }
            setHotel(hotelList);
            // console.log(hotelList);
        })
    },[])

    const Card = ({hotel}) => {
        return (
            <TouchableOpacity onPress={()=>navigation.navigate('selectedDetailsScreen', {hotel})}>
                <View style={styles.container}>

                    {/* image */}
                    <Icons
                            name='favorite-outline'
                            size={25}
                            style={{color: 'red',position:'absolute',zIndex: 1, padding:10, alignSelf:'flex-end', alignItems:'flex-end'}}
                        />
                    <Image style={styles.image} source={{uri:hotel.display_image_url}}/>

                    {/* name of the hotel & location */}
                        <View style={styles.con}>
                            <View style={styles.hotelName}>
                            <Icons name="hotel" size={30} color='rgba(0, 0, 0, 0.7)'/>
                                <Text style={styles.hotelNameText}>{hotel.name}</Text>
                            </View>
                            
                            <View style={{display: 'flex',
                                flexDirection: 'row',
                                padding: 5,
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',}}>
                            </View>
                            
                        </View>

                    {/* prices */}
                        <View style={styles.hotelLocationName}>
                            <Icons name="location-pin" size={20} color='rgba(0, 0, 0, 0.7)'/>
                            <Text style={styles.hotelLocationNameText}>{hotel.suburb} {hotel.city} {hotel.province}</Text>
                        </View>

                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>

            <View style={{backgroundColor: 'white'}}>

                <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', width: '90%',top: 10}}>
                    {/* button to explore */}
                        <TouchableOpacity onPress={()=>navigation.navigate('searchInScreen')} 
                        style={styles.buttonSearch}>

                            <Fontisto name="search" size={20} color="#C99E30"/>
                            <Text style={styles.buttonSearchText}>Where would you like to go? </Text>
                        
                        </TouchableOpacity>
                </View>


                {/* content view */}
                <View style={{marginHorizontal:15, position:'relative', backgroundColor: 'white', top: 95}}>
                    <Text style={{fontWeight: 'bold', fontSize:20, marginHorizontal:10}}>Explore Nearby Places</Text>

                    <View style={{top:10, paddingBottom:250}}>
                        
                        <FlatList
                            style={{marginVertical:10,paddingBottom: 40}}
                            data={hotel}
                            Vertical
                            renderItem={({item})=><Card hotel={item}/>}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
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
    ,buttonCustom:{
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingVertical: 14,
        backgroundColor: '#C99E30',
        borderRadius: 15,
        elevation: 2,
        shadowColor:'#000',
        shadowOffset: {width:2, height:2},
        shadowOpacity:0.25,
        shadowRadius:3.5,
        marginBottom: 10,
        top:15
    },
    buttonText:{
        color: '#fff',
        fontWeight:'bold',
        fontSize:17,
        marginLeft: 15,
    },
    buttonSearch:{
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent:'flex-start',
        padding:15,
        alignItems:'center',
        paddingVertical: 14,
        backgroundColor: '#fff',
        borderRadius: 25,
        elevation: 2,
        shadowColor:'#000',
        shadowOffset: {width:2, height:2},
        shadowOpacity:0.25,
        shadowRadius:3.5,
        marginBottom: 10,
        flexDirection: 'row',
        position: 'absolute',
        top: 20,
        zIndex: 100
    },
    buttonSearchText:{
        color: 'rgba(0, 0, 0, 0.25)',
        fontWeight:'normal',
        fontSize:13,
        marginLeft: 25,
    }
    
})

export default Hotels

