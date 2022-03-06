import React,{useEffect} from 'react';
import {Text, TouchableOpacity, View,StyleSheet,FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Hotels from '../Hotels/Index';
import data from '../Data/hotelData';

const TopNavigatorDashboardScreen = ({navigation}) => {
    
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

                    <View style={{top:10, bottom:90}}>
                        
                        <FlatList
                        style={{marginBottom:150}}
                        data={hotel}
                        renderItem={
                            ({item})=>
                            <TouchableOpacity onPress={()=>navigation.navigate('selectedDetailsScreen')}><Hotels hotel={item}
                            /></TouchableOpacity>
                            }
                        />

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    buttonCustom:{
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

export default TopNavigatorDashboardScreen
