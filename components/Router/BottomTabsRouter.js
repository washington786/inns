import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons'
import Dashboard from '../screens/Dashboard';
import SearchScreen from '../SearchResults/SearchScreen';
import AccountScreen from '../BottomRouterPages/AccountScreen';
import BookedHotelsScreen from '../BottomRouterPages/BookedHotelsScreen';
import HistoryScreen from '../BottomRouterPages/HistoryScreen';
import DashboardBottomScreen from '../BottomRouterPages/DashboardBottomScreen';
import {Dimensions} from 'react-native'
import TopNavigationScreen from '../TopNavigatorScreens/TopNavigationScreen';


const BottomTabsRouter = () => {

    const Tab = createBottomTabNavigator();

    const width = Dimensions.get('screen').width;

    return (
         <Tab.Navigator 
         screenOptions={{headerShown: false,"tabBarActiveTintColor":'#C99E30',"tabBarStyle":{
            backgroundColor:'#F9F9F9',
          borderRadius: 10, elevation: 6, alignItems:'center', justifyContent: 'center', position:'absolute', marginVertical:20,marginHorizontal:10, height:55}}}>


            <Tab.Screen name={"Dashboard"} component={TopNavigationScreen} options={{tabBarIcon:({color})=>(
                <Icons name='dashboard' size={25} color={color} />
            )}}/>

            <Tab.Screen name={"Bookings"} component={BookedHotelsScreen} options={{tabBarIcon:({color})=>(
                <Icons name='hotel' size={25} color={color} />
            )}}/>

            <Tab.Screen name={"history"} component={HistoryScreen} options={{tabBarIcon:({color})=>(
                <Icons name='history' size={25} color={color} />
            )}}/>

            <Tab.Screen name={"account"} component={AccountScreen} options={{tabBarIcon:({color})=>(
                <Icons name='account-box' size={25} color={color} />
            )}}/>

         </Tab.Navigator>
    )
}

export default BottomTabsRouter
