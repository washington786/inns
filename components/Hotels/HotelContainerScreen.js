import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Hotels from './Index'
import data from '../Data/hotelData';

const HotelContainerScreen = () => {

    const hotel1 = data[0];
    const hotel2 = data[1];
    const hotel3 = data[2];
    return (
        <SafeAreaView>

            <View style={{backgroundColor: 'white', height: '100%'}}>
                <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
                    <Hotels hotels={hotel1}/>
                    <Hotels hotels={hotel2}/>
                    <Hotels hotels={hotel3}/>
                </ScrollView>
            </View>
            
        </SafeAreaView>
    )
}

export  default HotelContainerScreen
