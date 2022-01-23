import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TopNavigatorDashboardScreen from './TopNavigatorDashboardScreen';
import TopNavigatorMapsScreens from './TopNavigatorMapsScreens';

const Tab = createMaterialTopTabNavigator();

const TopNavigationScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                // activeTintColor:'#F6C954',
                tabBarIndicatorStyle:{
                    backgroundColor:'#F6C954'
                },
                tabBarActiveTintColor:'#F6C954'
            }}
        >
            <Tab.Screen name="Hotels" component={TopNavigatorDashboardScreen} />
            <Tab.Screen name="Map" component={TopNavigatorMapsScreens} />
        </Tab.Navigator>
    )
}

export default TopNavigationScreen
