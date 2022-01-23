import React,{ useState} from 'react'
import { SafeAreaView, ScrollView, Text,View,TouchableOpacity, Modal, StyleSheet, Animated} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import Dialog from "react-native-dialog";

// modal
const ModalPopup = ({visible, children}) => {
    
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={{flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',}}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const ExistingCardScreen = ({navigation}) => {
    
    const [visible, setVisible] = useState(false);

    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
                <ScrollView style={{backgroundColor: 'white',height: '100%', width: '100%',
                 }}>
                    {/* tool bar */}
                    <View style={{marginHorizontal: 15, 
                    marginVertical:10, display:'flex',
                    flexDirection: 'row',alignItems:'center'}}>

                        <TouchableOpacity
                            onPress={() =>navigation.navigate('bookingScreen')}
                            >
                            <Icons name="keyboard-backspace" size={28} color="#000"/>
                        </TouchableOpacity>

                        <View style={{justifyContent: 'center', width: '100%', flex:1}}>
                            <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',}}>Choose Card</Text>
                        </View>

                    </View>

                    {/* instructions */}
                    <View style={{marginHorizontal: 20, 
                        marginVertical:10, display:'flex',
                        flexDirection: 'row',alignItems:'center',
                        backgroundColor:'#F9F9F9', padding:5,
                        borderRadius:15
                        }}>

                        <Icons 
                            style={{paddingLeft:5}}
                            name="info" 
                            size={20}
                            color="rgba(0, 0, 0, 0.25)"/>

                        <Text style={{
                            fontSize:10, 
                            paddingLeft:5,
                            color:'rgba(0, 0, 0, 0.45)'
                            }}>
                            Please choose a card to make payment for the service.
                        </Text>

                    </View>

                    {/* cards */}
                    <TouchableOpacity onPress={()=>setVisible(true)}>
                        <View style={{marginHorizontal: 20, 
                            marginVertical:10, display:'flex',
                            flexDirection: 'column',alignItems:'flex-start',
                            backgroundColor:'#F9F9F9', padding:5,
                            borderRadius:2
                            }}>


                            <View style={{
                                marginVertical:5, display:'flex',
                                flexDirection: 'column',alignItems:'center',
                                backgroundColor:'white', padding:5,
                                borderRadius:2, width:'100%', height:90, elevation: 1
                                }}>

                                <View style={{
                                display:'flex',
                                flexDirection: 'row',alignItems:'center',
                                padding:5,
                                width:'100%'
                                }} >
                                    <Icon name='card-account-details' size={30} style={{marginHorizontal: 10}}/>
                                    <Text>Daniel Moshorwane</Text>
                                    <Text style={{marginHorizontal: 10, 
                                        alignSelf:'flex-end', justifyContent: 'flex-end', 
                                        alignItems:'flex-end', alignContent:'flex-end', textAlign:'right', width: '35%'
                                        }}>
                                        <Icons name='verified' size={20} style={{marginHorizontal: 10, color:'#17C828'
                                        }}/>
                                    </Text>
                                </View>

                                    <Text style={{textAlign:'left', width: '90%',marginHorizontal: 20}}>4563*****544627364</Text>
                                    <Text style={{textAlign:'left', width: '90%',marginHorizontal: 20}}>15*</Text>

                                <View>

                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                {/* Modal */}
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                    <ModalPopup visible={visible}>

                        <View style={{alignItems:'center', justifyContent: 'center', alignItems:'center'}}>

                            <View style={styles.modalTitle}>

                                <Text style={styles.title}>Payment Confirmation</Text>

                                <View style={{marginHorizontal: 20, 
                                    marginVertical:10, display:'flex',
                                    flexDirection: 'row',alignItems:'center',
                                    backgroundColor:'#F9F9F9', padding:5,
                                    borderRadius:15
                                    }}>

                                    <Icons 
                                        style={{paddingLeft:2}}
                                        name="info" 
                                        size={20}
                                        color="#FF0404"/>

                                    <Text style={{
                                        fontSize:10, 
                                        paddingLeft:5,
                                        color:'#FF0404'
                                        }}>
                                        You are to make payment for inns Services:
                                    </Text>

                                </View>

                                <View style={styles.services}>

                                        {/* hotel name */}
                                        <View style={styles.inns}>

                                            <FontIcon name='hotel' size={20} color='rgba(0, 0, 0, 0.45)'/>
                                            <Text style={{paddingLeft:15, fontSize:13}}>Suzuki Mutes</Text>

                                        </View>

                                        {/* location */}
                                        <View style={styles.inns}>

                                            <Icons name='location-on' size={20} color='rgba(0, 0, 0, 0.45)'/>
                                            <Text style={{paddingLeft:15, fontSize:13}}>23 Vun street,Annadale, Polokwane</Text>

                                        </View>

                                        {/* prices */}
                                        <View style={styles.inns}>

                                            <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft:3}}>R</Text>
                                            <Text style={{paddingLeft:15, fontSize:13, paddingTop:2}}>1200.00/ overnight</Text>

                                        </View>

                                        {/* buttons */}
                                        <View style={styles.inns2}>

                                            <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', margin: 10, width: '35%',top: 10}}>
                                                <TouchableOpacity style={styles.buttonCustom}
                                                onPress={() => setVisible(false)}
                                                ><Text style={styles.buttonText}>CANCEL</Text></TouchableOpacity>
                                            </View>

                                            <View style={{alignSelf:'center', justifyContent: 'center', position: 'relative', margin: 10, width: '35%',top: 10}}>
                                                <TouchableOpacity style={styles.buttonCustom2}
                                                onPress={() => setVisible(false)}
                                                ><Text style={styles.buttonText}>CONTINUE</Text></TouchableOpacity>
                                            </View>

                                        </View>

                                </View>

                            </View>

                        </View>

                    </ModalPopup>

                </View>
                    

                 </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:25,
        borderRadius:15,
        elevation:15,
        width: '80%',
        
    },
    modalTitle:{
        
    },
    title:{
        textAlign:'center',
        fontWeight: 'bold'
    },
    services:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inns:{
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical:5,
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        alignContent:'flex-start',
        width:'95%',
        left:10,
        alignSelf:'flex-end'
    },
    buttonCustom:{
        width: '100%',
        height: 45,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: 14,
        backgroundColor: '#FF0404',
        borderRadius: 5,
        elevation: 2,
        shadowColor:'#000',
        shadowOffset: {width:2, height:2},
        shadowOpacity:0.25,
        shadowRadius:3.5,
        marginBottom: 10
    },
    buttonText:{
        color: '#fff',
        fontWeight:'bold',
        fontSize:12,
        zIndex: 10
    },
    buttonCustom2:{
        width: '100%',
        height: 45,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: 14,
        backgroundColor: '#17C828',
        borderRadius: 5,
        elevation: 2,
        shadowColor:'#000',
        shadowOffset: {width:2, height:2},
        shadowOpacity:0.25,
        shadowRadius:3.5,
        marginBottom: 10
    },
    buttonText2:{
        color: '#fff',
        fontWeight:'bold',
        fontSize:12,
        zIndex: 10
    },
    inns2:{
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical:5,
        justifyContent: 'space-evenly',
        alignItems:'center',
        width:'95%',
    },

})

export default ExistingCardScreen