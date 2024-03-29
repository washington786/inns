import {SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,TouchableOpacity,Dimensions
} from 'react-native'
import React, {useState, useEffect} from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';

import {db} from '../firebase-config.js';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

// google places
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// // lottie
// import LottieView from 'lottie-react-native';
// import GoogleSuggestion from './GoogleSuggestion'

const SearchInRealTimeScreen = ({navigation}) => {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    const [hotel,setHotel] = useState([]);

    const searchFilterFunction = (text) => {

        if (text) {
          const newData = masterDataSource.filter(
            function (item) {
              const itemData = item.name
                ? item.name.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
        //   setFilteredDataSource(newData);
        setHotel(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };
    
      const ItemView = ({item}) => {
        return (
          // Flat List Item
          <Text
            style={styles.itemStyle}
            onPress={() => getItem(item)}>
            {item.id}
            {'.'}
            {item.title.toUpperCase()}
          </Text>
        );
      };
    
      const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
      };
    
      const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
      };

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
            setMasterDataSource(hotelList);
        })
    },[])

    return (

       <SafeAreaView style={{backgroundColor: 'white'}}>

             <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>

            {/* tool bar */}
            <View style={{marginHorizontal: 15, 
                marginVertical:20, display:'flex',
                flexDirection: 'row',alignItems:'center'}}>

                    <TouchableOpacity
                        onPress={() =>navigation.navigate('bottomTabsScreen')}
                        >
                        <Icons name="keyboard-backspace" size={28} color="#000"/>
                    </TouchableOpacity>

                    <View style={{
                    width: '88%', height: 44,backgroundColor: '#F9F9F9',borderRadius:5,shadowColor:'#000',
                    shadowOffset:{width:0,height:3},shadowOpacity:0.27,shadowRadius:4.65,elevation:6,
                    paddingHorizontal:10,display: 'flex',flexDirection: 'row',padding:10,
                    alignItems:'center', marginLeft:15}}>

                        <Icons
                            color='rgba(0, 0, 0, 0.25)'
                            name='search'
                            type='font-awesome'
                            size={20}
                        />
                        
                        <TextInput
                            style={{flex: 1, paddingHorizontal: 12}}
                            placeholder="Where would you like to go?"
                            onChangeText={(text) => searchFilterFunction(text)}
                            value={search}
                        />

                    </View>

            </View>

                <View style={{margin: 10, display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'center',backgroundColor: 'white',borderRadius:10,
                }}>
                    <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                    />
                </View>

             </View>

       </SafeAreaView>
        
    )
}

export default SearchInRealTimeScreen