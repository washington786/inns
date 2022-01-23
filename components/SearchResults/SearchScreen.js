import React from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import Hotels from '../Hotels/Index'
import datas from '../Data/hotelData'

const SearchScreen = () => {
    return (
        <SafeAreaView>

            <View>

                <FlatList
                    data={datas}
                    renderItem={({item})=><Hotels hotels={item}/>}
                />

            </View>
            
        </SafeAreaView>
    )
}

export default SearchScreen