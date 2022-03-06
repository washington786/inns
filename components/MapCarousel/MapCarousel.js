import React,{useState,useEffect} from 'react'
import { View,Dimensions,Image,Text} from 'react-native'
import test from '../Images/dash/vacations.jpg';
import {db} from '../firebase-config';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

// icons
import Icons from 'react-native-vector-icons/FontAwesome5'

const MapCarousel = (props) => {

    // const data = props.data;
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

    return (
        <View style={{ height:height*0.15, marginHorizontal: 10, borderRadius:15, display:'flex',flexDirection: 'row',backgroundColor: '#fff',elevation:5}}>

            <Image style={{width:width*0.4, height:height*0.15, borderRadius:10}} source={{uri:hotel.display_image_url}}/>
            <View style={{marginHorizontal:10, marginVertical:15}}>
                <View style={{display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Icons name='hotel' size={20} color={'grey'}/>
                    <Text style={{fontWeight: 'bold',fontSize:18,padding:5, letterSpacing:2}}>{hotel.name}</Text>
                </View>

                {/* description */}
                <Text style={{fontWeight: '100',fontSize:10, paddingTop:5, color:'grey', width:width*0.49, paddingVertical:10}}>{hotel.description}</Text>

                {/* price */}
                <Text style={{fontWeight: 'bold',fontSize:15,letterSpacing:0.5, paddingTop:5, color:'#C99E30'}}>{hotel.suburb}, {hotel.town}</Text>
                    
            </View>

        </View>
    )
}

export default MapCarousel
