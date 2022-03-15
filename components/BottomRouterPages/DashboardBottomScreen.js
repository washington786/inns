import React from 'react'
import { SafeAreaView,View,Text, Dimensions,TouchableOpacity,StyleSheet,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Ico from 'react-native-vector-icons/Fontisto';

// 
import Hotels from '../Hotels/Index';
import data from '../Data/hotelData';

const DashboardBottomScreen = ({navigation}) => {

    const windowWidth = Dimensions.get('screen').width;
    const windowHeight = Dimensions.get('screen').height;

    return (
        <SafeAreaView style={{backgroundColor: 'white', height: windowHeight, width: windowWidth}}>

             <View style={{backgroundColor: 'white', height: windowHeight, width: windowWidth, flex: 1}}>

                <View style={{
                    display:'flex',
                    flexDirection: 'column',alignItems:'flex-start',backgroundColor: '#F3F3F3', height:windowHeight*0.08, elevation:5}}>

                    <View style={{display: 'flex', flexDirection: 'row',alignItems:'center', justifyContent:'space-between',marginHorizontal:10, top:0}}>

                        <View style={{alignSelf:'center', justifyContent: 'center',top: 0}}>

                            <TouchableOpacity onPress={()=>navigation.navigate('newSearchScreen')} 
                            style={styles.buttonSearch}>

                            <Ico name="search" size={20} color="#C99E30"/>
                            <Text style={styles.buttonSearchText}>Where would you like to go? </Text>
                            
                            </TouchableOpacity>

                        </View>  
                        
                    </View>

                    {/* content view */}
                <View style={{top:30, marginHorizontal:15}}>
                    <Text style={{fontWeight: 'bold', fontSize:20}}>Explore Nearby Places</Text>

                    <View style={{top:10, bottom:120}}>
                        
                        <FlatList
                        style={{marginBottom:300}}
                        data={data}
                        renderItem={
                            ({item})=>
                            <TouchableOpacity onPress={()=>navigation.navigate('selectedDetailsScreen')}><Hotels hotels={item}
                            /></TouchableOpacity>
                            }
                        />

                    </View>
                </View>


                </View>

             </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    buttonSearch:{
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent:'flex-start',
        padding:15,
        alignItems:'center',
        paddingVertical: 14,
        backgroundColor: '#F9F9F9',
        borderRadius: 5,
        elevation: 6,
        shadowColor:'#000',
        shadowOffset: {width:2, height:2},
        shadowOpacity:0.25,
        shadowRadius:3.5,
        marginBottom: 10,
        flexDirection: 'row',
        position: 'absolute',
        top: 30,
        zIndex: 200,
        borderColor: '#C99E30',
        borderWidth: .5
    },
    buttonSearchText:{
        color: 'rgba(0, 0, 0, 0.25)',
        fontWeight:'normal',
        fontSize:13,
        marginLeft: 25,
    }
})

export default DashboardBottomScreen
