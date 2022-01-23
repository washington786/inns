import React,{ useState,useRef } from 'react'
import { SafeAreaView, ScrollView, Text,View,TouchableOpacity, TextInput, StyleSheet,Dimensions,ActivityIndicator} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const CardAddedSuccessfully = ({navigation}) => {
    const [submitSpinner, setSubmitSpinner] = React.useState(false);
    return (
        <SafeAreaView style={{display: 'flex', flex:1, backgroundColor:'white'}}>

            <View style={{backgroundColor: 'white', height: height, width: width}}>

                <View style={style.container}>

                    <Icons name='check-circle' size={120} color='green'/>
                    <Text >you've successfully added your card details for payment.</Text>

                    <TouchableOpacity
                            style={style.updateButton}
                            onPress={() =>
                            {
                                if(2+2==4){
                                    setSubmitSpinner(!submitSpinner);
                                }
                                // navigation.navigate('')
                            }
                            
                            }
                        >
                        <Text style={style.buttonText}>CONTINUE</Text>{
                            submitSpinner?(<ActivityIndicator
                                style={{marginLeft:10}}
                                color='#fff'
                                size={'small'}
                            />):null
                        }
                        </TouchableOpacity>

                </View>

            </View>
            
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    container: {
        width: width,
        height: height,
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    message:{width:width*4.5},
    updateButton:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        paddingVertical: 10,
        paddingHorizontal:20,
        marginTop:20,
        borderRadius:5,
        elevation:2,
        shadowColor:'#000',
        shadowOffset:{width:2, height:2},
        shadowOpacity: 0.25,
        shadowRadius:3.5,
        backgroundColor:'green',
        textAlign:'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical:10
    },
    buttonText:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',

    }
})
export default CardAddedSuccessfully
