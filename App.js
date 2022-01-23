import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';

import {StatusBar} from 'react-native'

import OnboardingScreen from './components/screens/OnboardingScreen';
import SplashScreen from './components/screens/SplashScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

import RegisterScreen from './components/screens/RegisterScreen';
import LoginScreen from './components/screens/LoginScreen';
import ForgotPassword from './components/screens/ForgotPassword';
import ResetSuccessfulScreen from './components/screens/ResetSuccessfulScreen';
import Dashboard from './components/screens/Dashboard';
import Hotels from './components/Hotels/Index';
import HotelContainerScreen from './components/Hotels/HotelContainerScreen';
import SearchScreen from './components/SearchResults/SearchScreen';
import SearchInRealTimeScreen from './components/SearchResults/SearchInRealTimeScreen';
import BookingContainerScreen from './components/Booking/BookingContainerScreen';
import PaymentBottomSheet from './components/BottomPaymentSheet/PaymentBottomSheet';
import AddNewCardScreen from './components/AddNewCard/AddNewCard';
import ExistingCardScreen from './components/ExistingCard/ExistingCardScreen';
import BottomTabsRouter from './components/Router/BottomTabsRouter';
import AccountScreen from './components/BottomRouterPages/AccountScreen';
import BookedHotelsScreen from './components/BottomRouterPages/BookedHotelsScreen';
import HistoryScreen from './components/BottomRouterPages/HistoryScreen';
import SelectedHotelDetails from './components/HotelDetailsPage/SelectedHotelDetails.js';
// account pages
import HelpScreen from './components/AccountScreens/HelpScreen';
import AboutAppScreen from './components/AccountScreens/AboutAppScreen';
import AccountSettingsScreen from './components/AccountScreens/AccountSettingsScreen';
import CardAddedSuccessfully from './components/AddNewCard/CardAddedSuccessfully';
import GoogleSuggestion from './components/SearchResults/GoogleSuggestion';

const Stack = createNativeStackNavigator();

const App=()=> {

  const [isFirstLaunch, setIsFirstLaunch]=React.useState(null);

  // useEffect(()=>{
  //   AsyncStorage.getItem('alreadyLaunched').then(value=>{
  //     if(value==null){

  //       AsyncStorage.setItem('alreadyLaunched', 'true');
  //       setIsFirstLaunch(true);

  //     }else{
  //       setIsFirstLaunch(false);
  //     }
  //   })
  // },[]);

  // if(isFirstLaunch!=null){
  //   return <LoginScreen/>
  // }
  // else if(isFirstLaunch===true)
  // {
  //   return(
  //    <NavigationContainer>

  //    <StatusBar backgroundColor='#C99E30'/>

  //     <Stack.Navigator>
  //         <Stack.Screen options={{headerShown: false}} name="splashScreen" component={SplashScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="onboardingScreen" component={OnboardingScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="loginScreen" component={LoginScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="registerScreen" component={RegisterScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="forgotScreen" component={ForgotPassword} />
  //         <Stack.Screen options={{headerShown: false}} name="resetSuccessScreen" component={ResetSuccessfulScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="dashboardScreen" component={Dashboard} />
  //         <Stack.Screen options={{headerShown: false}} name="hotelsScreen" component={Hotels} />
  //         <Stack.Screen options={{headerShown: false}} name="hotelContainerScreen" component={HotelContainerScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="searchScreen" component={SearchScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="searchInScreen" component={SearchInRealTimeScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="bookingScreen" component={BookingContainerScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="paymentBottomScreen" component={PaymentBottomSheet} />
  //         <Stack.Screen options={{headerShown: false}} name="addCardScreen" component={AddNewCardScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="existingCardScreen" component={ExistingCardScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="bottomTabsScreen" component={BottomTabsRouter} />
  //         <Stack.Screen options={{headerShown: false}} name="cardAddedSuccessScreen" component={CardAddedSuccessfully} />
  //         {/* router screens */}
  //         <Stack.Screen options={{headerShown: false}} name="accountTabScreen" component={AccountScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="bookedHotelTabScreen" component={BookedHotelsScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="historyTabScreen" component={HistoryScreen} />
  //         {/* <Stack.Screen options={{headerShown: false}} name="dashTabScreen" component={DashboardBottomScreen} /> */}
  //         {/* details screen  */}
  //         <Stack.Screen options={{headerShown: false}} name="selectedDetailsScreen" component={SelectedHotelDetails} />
  //         {/* account settings screens */}
  //         <Stack.Screen options={{headerShown: false}} name="helpScreen" component={HelpScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="accountSettingScreen" component={AccountSettingsScreen} />
  //         <Stack.Screen options={{headerShown: false}} name="aboutAppScreen" component={AboutAppScreen} />
  //     </Stack.Navigator>

  //   </NavigationContainer>
  // )


  // }else
  // {
  //   return null;
  // }

  return(
     <NavigationContainer>

     <StatusBar backgroundColor='#C99E30'/>

      <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="splashScreen" component={SplashScreen} />
          <Stack.Screen options={{headerShown: false}} name="onboardingScreen" component={OnboardingScreen} />
          <Stack.Screen options={{headerShown: false}} name="loginScreen" component={LoginScreen} />
          <Stack.Screen options={{headerShown: false}} name="registerScreen" component={RegisterScreen} />
          <Stack.Screen options={{headerShown: false}} name="forgotScreen" component={ForgotPassword} />
          <Stack.Screen options={{headerShown: false}} name="resetSuccessScreen" component={ResetSuccessfulScreen} />
          <Stack.Screen options={{headerShown: false}} name="dashboardScreen" component={Dashboard} />
          <Stack.Screen options={{headerShown: false}} name="hotelsScreen" component={Hotels} />
          <Stack.Screen options={{headerShown: false}} name="hotelContainerScreen" component={HotelContainerScreen} />
          <Stack.Screen options={{headerShown: false}} name="searchScreen" component={SearchScreen} />
          <Stack.Screen options={{headerShown: false}} name="searchInScreen" component={SearchInRealTimeScreen} />
          <Stack.Screen options={{headerShown: false}} name="bookingScreen" component={BookingContainerScreen} />
          <Stack.Screen options={{headerShown: false}} name="paymentBottomScreen" component={PaymentBottomSheet} />
          <Stack.Screen options={{headerShown: false}} name="addCardScreen" component={AddNewCardScreen} />
          <Stack.Screen options={{headerShown: false}} name="existingCardScreen" component={ExistingCardScreen} />
          <Stack.Screen options={{headerShown: false}} name="bottomTabsScreen" component={BottomTabsRouter} />
          <Stack.Screen options={{headerShown: false}} name="cardAddedSuccessScreen" component={CardAddedSuccessfully} />
          {/* router screens */}
          <Stack.Screen options={{headerShown: false}} name="accountTabScreen" component={AccountScreen} />
          <Stack.Screen options={{headerShown: false}} name="bookedHotelTabScreen" component={BookedHotelsScreen} />
          <Stack.Screen options={{headerShown: false}} name="historyTabScreen" component={HistoryScreen} />
          {/* <Stack.Screen options={{headerShown: false}} name="dashTabScreen" component={DashboardBottomScreen} /> */}
          {/* details screen  */}
          <Stack.Screen options={{headerShown: false}} name="selectedDetailsScreen" component={SelectedHotelDetails} />
          {/* account settings screens */}
          <Stack.Screen options={{headerShown: false}} name="helpScreen" component={HelpScreen} />
          <Stack.Screen options={{headerShown: false}} name="accountSettingScreen" component={AccountSettingsScreen} />
          <Stack.Screen options={{headerShown: false}} name="aboutAppScreen" component={AboutAppScreen} />
          {/* search */}
          <Stack.Screen options={{headerShown: false}} name="suggestionScreen" component={GoogleSuggestion} />
      </Stack.Navigator>

    </NavigationContainer>
  )

}

export default App