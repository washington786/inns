import React,{useState} from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icons from 'react-native-vector-icons/MaterialIcons'
import data from '../Data/searchData'

// google places
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// lottie
import LottieView from 'lottie-react-native';
import GoogleSuggestion from './GoogleSuggestion'

const SearchInRealTimeScreen = ({navigation}) => {

    return (

       <SafeAreaView style={{backgroundColor: 'white'}}>

             <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>

            {/* tool bar */}
                <View style={{marginHorizontal: 15, 
                marginVertical:10, display:'flex',
                flexDirection: 'row',alignItems:'center'}}>

                    <TouchableOpacity
                        onPress={() =>navigation.navigate('bottomTabsScreen')}
                        >
                        <Icons name="keyboard-backspace" size={28} color="#000"/>
                    </TouchableOpacity>

                    <View style={{justifyContent: 'center', width: '100%', flex:1}}>
                        <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',}}>Search Hotels</Text>
                    </View>

                </View>

                <View style={{margin: 10, display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'center',backgroundColor: 'white',borderRadius:10,
                }}>
                    {/* <LottieView source={require('../lottie files/search_lottie.json')} autoPlay loop  style={{height:250, justifyContent: 'center', alignItems: 'center'}}/> */}
                </View>

                
            {/* search bar view */}
                <View style={{margin: 10, display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'flex-start',backgroundColor: 'white',borderRadius:10
                }}>
                    
                    <View style={{
                    width: '95%', height: 400,borderRadius:5,
                    paddingHorizontal:10,display: 'flex',flexDirection: 'row',padding:10,
                    alignItems:'center', marginLeft:15,marginTop:-150,
                    zIndex:200
                    
                    }}>

                        <GooglePlacesAutocomplete
                            placeholder={'Where would you like to go?'}
                            onChange={(data:GooglePlaceData, details:GooglePlaceDetail | null = null)=>{
                                console.log(data,details);
                                navigation.navigate('selectedDetailsScreen');
                            }}
                            query={{
                                key:'AIzaSyANRBBVLmuDaht9R0yiG_yWr-6BLS0nwnM',
                                language:'en',
                                type:'(cities)',
                            }}
                            styles={{
                                container: {
                                    backgroundColor: '#F9F9F9',
                                    borderRadius:5,shadowColor:'#000',
                                    shadowOffset:{width:0,height:3},
                                    shadowOpacity:0.27,
                                    shadowRadius:4.65,
                                    elevation:6,
                                    // zIndex:100
                                }
                            }}
                            // suppressDefaultStyles
                            renderItem={({item})=><GoogleSuggestion item={item}/>}
                        />

                    </View>

                    {/* <LottieView source={require('../lottie files/search_lottie.json')} autoPlay loop/> */}

                    {/* <View style={{
                    width: '95%', height: 44,backgroundColor: '#F9F9F9',borderRadius:5,shadowColor:'#000',
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
                            value={searchInput}
                            onChangeText={setSearchInput}
                        />

                    </View> */}

                </View>

                {/* <FlatList
                style={{marginHorizontal:20, top: 10}}
                data={data}
                renderItem={({item})=>(
                <View style={{display:'flex', flexDirection: 'row', alignItems: 'center', borderBottomColor:'rgba(0, 0, 0, 0.1)', borderBottomWidth:1, marginTop:25}}>

                    <View style={{backgroundColor:'rgba(0, 0, 0, 0.1)', padding:10, margin: 5, borderRadius:10}}>
                        
                        <Icons
                                color='rgba(0, 0, 0, 0.7)'
                                name='location-pin'
                                type='font-awesome'
                                size={20}
                            />

                    </View>

                    <Text style={{marginLeft:20}}>{item.description}</Text>

                </View>
                
                )}
                /> */}

             </View>

       </SafeAreaView>
        
    )
}

export default SearchInRealTimeScreen