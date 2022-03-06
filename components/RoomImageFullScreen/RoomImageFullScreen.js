import React,{ useEffect,useState} from 'react'
import {StyleSheet, View,Image, Text,SafeAreaView,TouchableOpacity,FlatList,Dimensions} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

const windowHeight = Dimensions.get('window').width;
const windowWidth = Dimensions.get('window').height;

const RoomImageFullScreen = ({navigation, route}) => {
    const {room} = route.params;
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%', justifyContent: 'center'}}>

        <View style={{backgroundColor: 'blue', height: windowHeight, width: windowWidth, flex: 1,position: 'relative'}}>
            
            <Image source={{uri:room.room.image_3}} style={{flex: 1, resizeMode:'cover',alignItems: 'center'}}/>

            <Icons name="arrow-back-circle" size={40} color="#fff" style={{position: 'absolute', top:8, left: 8}}/>

            <View style={{position: 'absolute',bottom:30, justifyContent: 'center', alignItems:'center', textAlign: 'center', height: 200, marginHorizontal: 10, backgroundColor: '#F89', flexDirection: 'row', padding:10}}>
                
                <View style={{backgroundColor: 'white', elevation:1, height:200, width: 100, marginHorizontal: 10}}>

                </View>

                <View style={{backgroundColor: 'blue', elevation:1, height:200, width: 100,marginHorizontal: 10}}>

                </View>

            </View>
        </View>

    </SafeAreaView>
  )
}

export default RoomImageFullScreen