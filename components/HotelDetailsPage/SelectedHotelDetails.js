import React,{useState} from 'react';
import { SafeAreaView,View,Text, Dimensions,TouchableOpacity,StyleSheet,ScrollView, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Ico from 'react-native-vector-icons/Fontisto';
import testImage from '../Images/dash/bedroom.jpg';
import { Image } from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const images=[
        'https://cdn.pixabay.com/photo/2018/10/01/00/52/roof-top-pool-3715118_960_720.jpg',
        'https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_960_720.jpg',
        'https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_960_720.jpg',
        'https://cdn.pixabay.com/photo/2018/06/14/21/15/the-interior-of-the-3475656_960_720.jpg',
        'https://cdn.pixabay.com/photo/2017/03/09/06/30/pool-2128578_960_720.jpg'
    ];

const SelectedHotelDetails = ({navigation}) => {
    // image carousel
    

    const [imgActive, setImgActive] = useState(0);

    onChange=(nativeEvent)=>{
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if(slide!=imgActive){
                setImgActive(slide);
            }
        }
    }

    const [submitSpinner, setSubmitSpinner] = React.useState(false);
    
    return (
        <SafeAreaView style={{backgroundColor: 'white', height: windowHeight, width: windowWidth}}>
            <View style={{backgroundColor: 'white', height: windowHeight, width: windowWidth, flex: 1}}>
                <View style={{
                    display:'flex',
                    flexDirection: 'column',alignItems:'flex-start',backgroundColor: '#F3F3F3', height:windowHeight*0.4, elevation:5}}>
                        <View style={styles.wrap}>
                            <ScrollView
                                onScroll={({nativeEvent})=>onChange(nativeEvent)}
                                showsHorizontalScrollIndicator={false}
                                paddingEnabled
                                horizontal
                                style={styles.wrap}
                            >

                                {
                                    images.map((e, index)=>
                                        <Image
                                        key={e}
                                        resizeMode='cover'
                                        style={styles.wrap}
                                        source={{uri: e}}
                                        />
                                    )
                                }

                            </ScrollView>
                            {/* d0ts */}
                            <View style={styles.wrapDot}>

                                {
                                    images.map((e, index) =>
                                        <Text key={e} style={imgActive == index ? styles.dotActive : styles.dot}>●</Text>
                                    )
                                }

                            </View>
                        </View>
                        {/* <Image source={testImage} style={{resizeMode:'cover', height:windowHeight*0.4, width:windowWidth}}/> */}
                        <TouchableOpacity
                        style={{position:'absolute',display:'flex',top:5, paddingLeft:5}}
                            onPress={() =>navigation.navigate('Dashboard')}
                            >
                            <View style={{backgroundColor:'#Fff', borderRadius:70, width: 40, height:40, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                                <Icons name="keyboard-backspace" size={28} color="#000"/>
                            </View>
                            
                        </TouchableOpacity>
                    </View>
                    
                    {/* hotel details */}
                    <View style={styles.details}>
                        <Text>
                            <Ico name={'hotel'} size={20} color='#000000' style={{paddingRight:10}}/>
                            <Text style={styles.hotelName}>  Maluleka Hotels</Text>
                        </Text>
                    </View>

                    <View style={styles.hotelDetails}>

                        <Text>
                            <Icons name='location-pin' size={20} color='red' style={{paddingRight:10}}/>
                            <Text>34 Zakes Bantwini str,Florah, Polokwane.</Text>
                        </Text>

                        <Text style={styles.price}>R1500.00/night</Text>

                        <View style={styles.featuresContainer}>

                                <View style={styles.features}>
                                    <Icons name='wifi' size={20} />
                                    <Text style={{padding:2}}>available</Text>
                                </View>

                                <View style={styles.features}>
                                    <Icons name='tv' size={20} />
                                    <Text style={{padding:2}}>available</Text>
                                </View>

                                <View style={styles.features}>
                                    <Icons name='free-breakfast' size={20} />
                                    <Text style={{padding:2}}>served</Text>
                                </View>

                                  
                        </View>

                        <View style={styles.featuresContainer}>

                                <View style={styles.features}>
                                    <Icons name='pool' size={20} />
                                    <Text style={{padding:2}}>available</Text>
                                </View>

                                <View style={styles.features}>
                                    <Icons name='local-parking' size={20} />
                                    <Text style={{padding:2}}>available</Text>
                                </View>

                                <View style={styles.features}>
                                    <Icons name='pets' size={20} />
                                    <Text style={{padding:2}}>allowed</Text>
                                </View>

                        </View>

                    </View>

                <TouchableOpacity
                            style={styles.updateButton}
                            onPress={() =>
                            // {
                            //     if(2+2==4){
                            //         setSubmitSpinner(!submitSpinner);
                            //     }
                            // },
                                navigation.navigate('bookingScreen')
                            }
                        >
                        <Text style={styles.buttonText}>Book Now</Text>{
                            submitSpinner?(<ActivityIndicator
                                style={{marginLeft:10}}
                                color='#fff'
                                size={'small'}
                            />):null
                        }
                        </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrap:{
        height:windowHeight*0.4, 
        width:windowWidth
    },
    wrapDot:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center'

    },
    dotActive:{
        margin:3,
        color:'white'
    },
    dot:{
        margin:3,
        color:'grey'
    },
    details:{
        marginHorizontal: 15,
        marginVertical:15,
    },
    hotelName:{
        fontSize:25,
        fontWeight:'bold',
        paddingLeft: 10
    },
    hotelDetails:{
        marginVertical:5, 
        display:'flex',
        alignItems:'flex-start',
        backgroundColor:'white', 
        padding:5,
        borderRadius:1, 
        elevation: 2,
        marginHorizontal:15,
        textAlign:'center',
        justifyContent: 'flex-start'
    },
    price:{
        padding:5,
        marginTop:4,
        fontWeight: 'bold'
    },
    featuresContainer:{
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical:10,
        justifyContent: 'center',
        alignItems:'center',
        textAlign: 'center',
    },
    features:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:'#EDEDED',
        justifyContent: 'center',
        alignItems:'center',
        textAlign: 'center',
        elevation: 2,
        width:windowWidth*0.25,
        padding:8,
        margin:8
    },
    updateButton:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        paddingVertical: 10,
        paddingHorizontal:10,
        borderRadius:5,
        elevation:2,
        shadowColor:'#000',
        shadowOffset:{width:2, height:2},
        shadowOpacity: 0.25,
        shadowRadius:3.5,
        backgroundColor:'#F6C954',
        textAlign:'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        marginVertical:20,
        // position: 'absolute',
        // bottom: 60,
        // width: windowWidth*0.7
    },
    buttonText:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',

    }
});

export default SelectedHotelDetails
