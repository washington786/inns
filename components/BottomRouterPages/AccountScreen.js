import React from 'react'
import { SafeAreaView,View,Text, Dimensions,ScrollView,TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'

const AccountScreen = ({navigation}) => {

    const windowWidth = Dimensions.get('screen').width;
    const windowHeight = Dimensions.get('screen').height;

    return (
        <SafeAreaView style={{backgroundColor: 'white', height: windowHeight, width: windowWidth}}>

            <View style={{backgroundColor: 'white', height: windowHeight, width: windowWidth, flex: 1}}>


               <ScrollView style={{backgroundColor: 'white', height: windowHeight, width: windowWidth, flex: 1}}>


                    {/* tool bar */}
                    <View style={{
                    display:'flex',
                    flexDirection: 'row',alignItems:'center', borderBottomWidth: 1, borderBottomColor:'rgba(0, 0, 0, 0.1)'}}>

                        <View style={{justifyContent: 'center', width: '100%',  backgroundColor:'#F9F9F9'}}>
                            <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',paddingBottom: 5,paddingTop:10,marginVertical:10, }}>Account Settings</Text>
                        </View>

                    </View>

                    {/* page indexes */}

                    <View style={{justifyContent:'space-evenly', alignItems: 'stretch'}}>

                        <View>

                            <TouchableOpacity onPress={()=>navigation.navigate('accountSettingScreen')}>
                                <View style={{
                                    display:'flex',
                                    flexDirection: 'row',alignItems:'center', borderBottomWidth: 1, 
                                    borderBottomColor:'rgba(0, 0, 0, 0.05)', marginHorizontal: 10, marginVertical:10, marginTop:40, justifyContent:'space-between'}}>

                                    <View style={{display:'flex',flexDirection: 'row',alignItems:'center'}}>

                                        <Icons name='account-cog' size={35} style={{paddingRight:20,color:'#C99E30'}}/>
                                        <Text style={{fontSize:15, fontWeight: 'bold',textAlign: 'center',paddingBottom: 5,paddingTop:10,marginVertical:10,color:'rgba(0, 0, 0, 0.55)' }}>Account Settings</Text>

                                    </View>

                                    <Icons name='chevron-right' size={25} style={{color:'rgba(0, 0, 0, 0.25)'}}/>
                                </View>
                            </TouchableOpacity>

                            
                            <TouchableOpacity onPress={()=>navigation.navigate('addCardScreen')}>
                                <View style={{
                                    display:'flex',
                                    flexDirection: 'row',alignItems:'center', borderBottomWidth: 1, 
                                    borderBottomColor:'rgba(0, 0, 0, 0.05)', marginHorizontal: 10, marginVertical:10, marginTop:5, justifyContent:'space-between'}}>

                                    <View style={{display:'flex',flexDirection: 'row',alignItems:'center'}}>

                                        <Icons name='credit-card-check' size={35} style={{paddingRight:20,color:'#C99E30'}}/>
                                        <Text style={{fontSize:15, fontWeight: 'bold',textAlign: 'center',paddingBottom: 5,paddingTop:10,marginVertical:10,color:'rgba(0, 0, 0, 0.55)' }}>Payment</Text>

                                    </View>

                                    <Icons name='chevron-right' size={25} style={{color:'rgba(0, 0, 0, 0.25)'}}/>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={()=>('')}>
                                 <View style={{
                                display:'flex',
                                flexDirection: 'row',alignItems:'center', borderBottomWidth: 1, 
                                borderBottomColor:'rgba(0, 0, 0, 0.05)', marginHorizontal: 10, marginVertical:10, marginTop:5, justifyContent:'space-between'}}>

                                    <View style={{display:'flex',flexDirection: 'row',alignItems:'center'}}>

                                        <Icons name='help-box' size={35} style={{paddingRight:20,color:'#C99E30'}}/>
                                        <Text style={{fontSize:15, fontWeight: 'bold',textAlign: 'center',
                                        paddingBottom: 5,paddingTop:10,marginVertical:10,color:'rgba(0, 0, 0, 0.55)' }}>Help</Text>

                                    </View>

                                    <Icons name='chevron-right' size={25} style={{color:'rgba(0, 0, 0, 0.25)'}}/>
                                    
                                </View>
                            </TouchableOpacity>
                           

                            <TouchableOpacity onPress={()=>('')}>
                                <View style={{
                                display:'flex',
                                flexDirection: 'row',alignItems:'center', borderBottomWidth: 1, 
                                borderBottomColor:'rgba(0, 0, 0, 0.05)', marginHorizontal: 10, marginVertical:10, marginTop:5, justifyContent:'space-between'}}>

                                    <View style={{display:'flex',flexDirection: 'row',alignItems:'center'}}>

                                        <Icons name='information' size={35} style={{paddingRight:20,color:'#C99E30'}}/>
                                        <Text style={{fontSize:15, fontWeight: 'bold',textAlign: 'center',
                                        paddingBottom: 5,paddingTop:10,marginVertical:10,color:'rgba(0, 0, 0, 0.55)' }}>About App</Text>

                                    </View>

                                    <Icons name='chevron-right' size={25} style={{color:'rgba(0, 0, 0, 0.25)'}}/>
                                    
                                </View>
                            </TouchableOpacity>
                            

                        </View>

                        <TouchableOpacity onPress={()=>('')}>
                            <View style={{
                                    display:'flex',
                                    flexDirection: 'row',alignItems:'center', marginHorizontal: 10, marginVertical:10, marginTop:60, justifyContent:'space-between'}}>

                                    <View style={{display:'flex',flexDirection: 'row',alignItems:'center'}}>

                                        <Icon name='logout' size={30} style={{paddingRight:20,color:'#FF1717'}}/>
                                        <Text style={{fontSize:15, fontWeight: 'bold',textAlign: 'center',
                                        paddingBottom: 5,paddingTop:10,marginVertical:10,color:'#FF1717' }}>Logout</Text>

                                    </View>
                                    
                            </View>
                        </TouchableOpacity>
                        

                    </View>

               </ScrollView>

            </View>

        </SafeAreaView>
    )
}

export default AccountScreen