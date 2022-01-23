import React from 'react'
import { Button, Image, Text, TouchableOpacity, View} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';

// skip button component
const skip=({...props})=>(

   <View style={{ background: '#C99E30', cornerRadius: 8}}>
        <TouchableOpacity
        style={{margin: 10}} {...props}>
        <Text style={{fontSize:14, fontWeight: '500',color: '#000'}}>Skip</Text>
    </TouchableOpacity>
    </View>

);

// next button component
const Next=({...props})=>(

    <View style={{ background: '#C99E30', cornerRadius: 8}}>
        <TouchableOpacity
        style={{margin: 10}} {...props}>
        <Text style={{fontSize:14, fontWeight: '700'}}>Next</Text>
    </TouchableOpacity>
    </View>
    
);

// done button component
const Done=({...props})=>(
    <View style={{ background: '#fff', cornerRadius: 8, width: '60%'}}>
        <TouchableOpacity
        style={{margin: 10}} {...props}>
        <Text style={{fontSize:14, fontWeight: '800', color: '#000'}}>Get Started</Text>
    </TouchableOpacity>
    </View>
    
);

const Dots=({selected})=>{
    // let backgroundColor =  selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.1)';
    let backgroundColor =  selected ? '#fff' : 'rgba(0,0,0,0.4)';

    return(
        <View
            style={{
                width: 5,
                height: 5,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    )
}

const OnboardingScreen = ({navigation}) => {
    return (
        
            <Onboarding 

            // components
            SkipButtonComponent={skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}


            // bottom bar backgroundColor
            bottomBarColor='#F6C954'

            // status bar
            controlStatusBar={false}

            onDone={()=>navigation.replace('registerScreen')}
            onSkip={()=>navigation.navigate('registerScreen')}

            // title and subtitle styles
            titleStyles={{
                color:'rgba(0,0,0,0.8)',
                fontSize: 25, 
                fontWeight: 'bold'
            }}

            subTitleStyles={{
                color:'rgba(0,0,0,0.4)',
                fontSize: 14, 
                fontWeight: '200',
                padding: 10
            }}

            pages={[
                {
                backgroundColor: '#fff',
                image: <Image source={require('../Images/welcome/travel_booking.png')} />,
                title: 'Home Comfort',
                subtitle: 'Travel without any stress, we got your back through exclusive affordable hotels.',
                },

                {
                backgroundColor: '#fff',
                image: <Image source={require('../Images/welcome/select_house.png')} />,
                title: 'Affordable Inns',
                subtitle: 'Select your lovely hotel for your time travel for your budget.',
                },

                {
                backgroundColor: '#fff',
                image: <Image source={require('../Images/welcome/relax_home.png')} />,
                title: 'Home-like inns',
                subtitle: 'Feel the comfort of your home by booking any of your suitable places.',
                },
                
            ]}
        />
        
    )
}

export default OnboardingScreen