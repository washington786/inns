import React from 'react'
import { SafeAreaView,View,Text, Dimensions,ScrollView,TouchableOpacity} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

const HelpScreen = ({navigation}) => {

    const windowWidth = Dimensions.get('screen').width;
    const windowHeight = Dimensions.get('screen').height;

    return (
        <SafeAreaView style={{backgroundColor: 'white', height: windowHeight, width: windowWidth}}>
            <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
                <View style={{marginHorizontal: 15, 
                    marginVertical:10, display:'flex',
                    flexDirection: 'row',alignItems:'center'}}>

                    <TouchableOpacity
                        onPress={() =>navigation.navigate('accountTabScreen')}
                        >
                        <Icons name="keyboard-backspace" size={28} color="#000"/>
                    </TouchableOpacity>

                    <View style={{justifyContent: 'center', width: '100%', flex:1}}>
                        <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',}}>Help</Text>
                    </View>

                </View>

                <ScrollView style={{backgroundColor: 'white', height: windowHeight, width: windowWidth, flex: 1}}>
                    <View style={{justifyContent:'space-evenly', alignItems: 'stretch'}}>
                        <Text style={{fontWeight: 'bold',fontSize:16, alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginVertical:20}}>Need Help with something?</Text>
                    </View>

                    <View style={{marginHorizontal:10, marginVertical:15,bottom:20}}>

                        <Collapse>
                            <CollapseHeader>
                                <View style={{flexDirection:'row', alignItems:'center', marginVertical: 10, marginHorizontal: 10}}>
                                    <Icon name="chevron-down-box" size={25} color='grey'/>
                                    <Text style={{fontSize:16, fontWeight:'700',color:'grey', marginHorizontal: 10}}>Creating a booking for a hotel?</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={{marginHorizontal:15, textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                {"\n"}
                                {"\n"}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                            </CollapseBody>
                        </Collapse>

                        <Collapse>
                            <CollapseHeader>
                                <View style={{flexDirection:'row', alignItems:'center', marginVertical: 10, marginHorizontal: 10}}>
                                    <Icon name="chevron-down-box" size={25} color='grey'/>
                                    <Text style={{fontSize:16, fontWeight:'700',color:'grey', marginHorizontal: 10}}>Want to update booking information?</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={{marginHorizontal:15, textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                {"\n"}
                                {"\n"}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                            </CollapseBody>
                        </Collapse>

                        <Collapse>
                            <CollapseHeader>
                                <View style={{flexDirection:'row', alignItems:'center', marginVertical: 10, marginHorizontal: 10}}>
                                    <Icon name="chevron-down-box" size={25} color='grey'/>
                                    <Text style={{fontSize:16, fontWeight:'700',color:'grey', marginHorizontal: 10}}>Want to Sign in a new account?</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={{marginHorizontal:15, textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                {"\n"}
                                {"\n"}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                            </CollapseBody>
                        </Collapse>

                        <Collapse>
                            <CollapseHeader>
                                <View style={{flexDirection:'row', alignItems:'center', marginVertical: 10, marginHorizontal: 10}}>
                                    <Icon name="chevron-down-box" size={25} color='grey'/>
                                    <Text style={{fontSize:16, fontWeight:'700',color:'grey', marginHorizontal: 10}}>Want to register a new account?</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={{marginHorizontal:15, textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                {"\n"}
                                {"\n"}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                            </CollapseBody>
                        </Collapse>

                        <Collapse>
                            <CollapseHeader>
                                <View style={{flexDirection:'row', alignItems:'center', marginVertical: 10, marginHorizontal: 10}}>
                                    <Icon name="chevron-down-box" size={25} color='grey'/>
                                    <Text style={{fontSize:16, fontWeight:'700',color:'grey', marginHorizontal: 10}}>Want to reset your account password?</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={{marginHorizontal:15, textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                {"\n"}
                                {"\n"}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                            </CollapseBody>
                        </Collapse>

                        <Collapse>
                            <CollapseHeader>
                                <View style={{flexDirection:'row', alignItems:'center', marginVertical: 10, marginHorizontal: 10}}>
                                    <Icon name="chevron-down-box" size={25} color='grey'/>
                                    <Text style={{fontSize:16, fontWeight:'700',color:'grey', marginHorizontal: 10}}>Looking to cancel a booking?</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={{marginHorizontal:15, textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                {"\n"}
                                {"\n"}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                            </CollapseBody>
                        </Collapse>

                        <Collapse>
                            <CollapseHeader>
                                <View style={{flexDirection:'row', alignItems:'center', marginVertical: 10, marginHorizontal: 10}}>
                                    <Icon name="chevron-down-box" size={25} color='grey'/>
                                    <Text style={{fontSize:16, fontWeight:'700',color:'grey', marginHorizontal: 10}}>Looking to cancel a booking?</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={{marginHorizontal:15, textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                {"\n"}
                                {"\n"}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                            </CollapseBody>
                        </Collapse>

                        <Collapse>
                            <CollapseHeader>
                                <View style={{flexDirection:'row', alignItems:'center', marginVertical: 10, marginHorizontal: 10}}>
                                    <Icon name="chevron-down-box" size={25} color='grey'/>
                                    <Text style={{fontSize:16, fontWeight:'700',color:'grey', marginHorizontal: 10}}>Make payment for the booking?</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={{marginHorizontal:15, textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                {"\n"}
                                {"\n"}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                            </CollapseBody>
                        </Collapse>
                        
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HelpScreen
