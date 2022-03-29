import React,{ useState, useEffect,useRef} from 'react';
import { View, Dimensions, FlatList,TouchableOpacity,Image,Text} from 'react-native';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import {db} from '../firebase-config';
// icons
import Icons from 'react-native-vector-icons/FontAwesome5'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

// import data
import places from '../Data/hotelData';
// import custom marker
import CustomMapMarker from '../CustomMapMarker/CustomMapMarker';
import MapCarousel from '../MapCarousel/MapCarousel';

const TopNavigatorMapsScreens = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    const flatList = useRef();

    const viewConfig = useRef({itemVisiblePercentThreshold:30});

    const map = useRef();

    const onViewChanged = useRef( ({viewableItems})=>{
        if(viewableItems.length>0){
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id);
        }
        });

    // making the hotels correspond to the clicking
    useEffect(() => {
        if(!selectedPlaceId || !flatList){
            return;
        }
        const index = places.findIndex(place =>place.id==selectedPlaceId);
        flatList.current.scrollToIndex({index}) 

        const selectedPlace = places[index];
        const region ={
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }
        map.current.animateToRegion(region);
        
    }, [selectedPlaceId])

    // map card
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
              console.log(hotelList);
          })
      },[])

    return (
        <View style={{height: height, width: width}}>
            <MapView
            ref={map}
            provider={PROVIDER_GOOGLE}
            style={{ height: height, width: width}}
            initialRegion={{
            latitude: -23.9,
            longitude:29.45,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
            >

            {/* dummy data */}
                {
                    places.map(place =>(
                        <CustomMapMarker
                            coordinate={place.coordinate}
                            price={place.price}
                            isSelected={place.id==selectedPlaceId}
                            onPress={() =>setSelectedPlaceId(place.id)}
                        />
                    ))
                }
           
            </MapView>

            {/* list of hotels on map */}
            <View style={{position:'absolute', bottom: 140,width: width}}>

                <FlatList
                    ref={flatList}
                    data={hotel}
                    renderItem={({item})=><MapCarousel data={item}/>}
                    keyExtractor = {(item)=>item.id}
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width}
                    snapToAlignment='center'
                    decelerationRate={'fast'}
                    viewabilityConfig={viewConfig.current} 
                    onViewableItemsChanged={
                        onViewChanged.current
                    }
                />
                
            </View>
        </View>
        
    )
}

export default TopNavigatorMapsScreens
