import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View,StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Dashboard = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>

            <View style={{backgroundColor: 'white', height: '60%'}}>

                <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', width: '90%',top: 10}}>

                        {/* button to explore */}
                        <TouchableOpacity onPress={()=>navigation.navigate('searchInScreen')} 
                        style={styles.buttonSearch}>

                            <Fontisto name="search" size={20} color="#C99E30"/>
                            <Text style={styles.buttonSearchText}>Where would you like to go? </Text>
                        
                        </TouchableOpacity>

                </View>                

                <ImageBackground source={require('../Images/dash/vacations.jpg')} 
                style={{width: '100%', height: '100%', resizeMode:'cover', justifyContent: 'center', 
                opacity:0.9, backgroundColor:'rgba(90, 90, 90,90)'}}> 

                    <View style={{backgroundColor: 'rgba(0, 0, 0,0.35)', height:580}}/>

                    <View style={{marginLeft: 20,position: 'relative', top: -240}}> 

                        <Text
                            style={{width: '90%', fontSize:40, fontWeight: 'bold',color: 'white'}}
                            >Explore Nearby places.
                        </Text>

                        <View style={{alignSelf:'flex-start', justifyContent: 'flex-start', position: 'relative', width: '70%',top: 10}}>

                        {/* button to explore */}
                        <TouchableOpacity onPress={()=>('')} 
                        style={styles.buttonCustom}><Text style={styles.buttonText}>Find Nearby Places </Text></TouchableOpacity>

                        </View>

                    </View>

                </ImageBackground>
                
                
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
        top: 60,
        zIndex: 100
    },
    buttonSearchText:{
        color: 'rgba(0, 0, 0, 0.25)',
        fontWeight:'normal',
        fontSize:13,
        marginLeft: 25,
    }
})

export default Dashboard