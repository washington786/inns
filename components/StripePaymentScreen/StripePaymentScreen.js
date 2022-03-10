import React,{useState,useEffect} from 'react';
import { SafeAreaView,View,Text, Dimensions,TouchableOpacity,StyleSheet,ScrollView, ToastAndroid,Image} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CheckBox } from 'react-native-elements'
import { CreditCardInput} from "react-native-credit-card-input";
import {db} from '../firebase-config';

const Secret_key = "sk_test_51JFTx2ELhasCFMKIlq1RuTrK60m9VhC64AbCjwxLxUKxRcbgFaasRDR3pFHyp8lcHFA5Zsjb2liadbxEETUEUbjl00SJXPtTDV";

const STRIPE_PUBLISHABLE_KEY ="pk_test_51JFTx2ELhasCFMKI2oqVyeeMrRREgFVWHxxQRRapQ0BPIEAooqbV0yhc8CfC7nNeEgRewIHTjDdMpiHe59iWs0xp006oFa5FtV";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

// components
const CURRENCY = 'USD';
var CARD_TOKEN = null;

// function
function getCreditCardToken(creditCardData){
    // alert()
    const card = {
      'card[number]': creditCardData.values.number.replace(/ /g, ''),
      'card[exp_month]': creditCardData.values.expiry.split('/')[0],
      'card[exp_year]': creditCardData.values.expiry.split('/')[1],
      'card[cvc]': creditCardData.values.cvc
    };
    return fetch('https://api.stripe.com/v1/tokens', {
      headers: {
        // Use the correct MIME type for your server
        Accept: 'application/json',
        // Use the correct Content Type to send data to Stripe
        'Content-Type': 'application/x-www-form-urlencoded',
        // Use the Stripe publishable key as Bearer
        Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`
      },
      // Use a proper HTTP method
      method: 'post',
      // Format the credit card data to a string of key-value pairs
      // divided by &
      body: Object.keys(card)
        .map(key => key + '=' + card[key])
        .join('&')
    }).
    then(response => response.json())
    .catch((error)=>console.log(error))
  };
  /**
   * The method imitates a request to our server.
   *
   * @param creditCardToken
   * @return {Promise<Response>}
   */
   function subscribeUser(creditCardToken){
    return new Promise((resolve) => {
      console.log('Credit card token\n', creditCardToken);
      CARD_TOKEN = creditCardToken.id;
      setTimeout(() => {
        resolve({ status: true });
      }, 1000);
    });
  };

const StripePaymentScreen = ({navigation,route}) => {

    // checkbox for saving card details
    const [checkBoxValue, setCheckBoxValue] = useState(false);

    const [CardInput, setCardInput] = React.useState({});

    const [bookings, setBookings] = useState([]);
    const booking = route.params;

    // const notificationKey =route.params;
    const key = booking.key;
    // const dateIn = moment(booking.check_in_date).format('DD-MMM-YYYY');

    // console.log("================key: ",key,"========================")
    // const database = db.ref(`/bookings/${notificationKey}/`);
    // console.log(database); 

    // useEffect(()=>{
    //     db.ref('/bookings/').on('value',snap=>{
    //         const bookList = [];

    //         const info = snap.val();

    //         for(let k in info){
    //             bookList.push({
    //                 check_in_date: info[k].check_in_date,
    //                 check_out_date: info[k].check_out_date,
    //                 no_adults: info[k].no_adults,
    //                 no_children: info[k].no_children,
    //                 no_nights: info[k].no_nights,
    //                 note: info[k].note,
    //                 payment_status: info[k].payment_status,
    //                 room_id: info[k].room_id,
    //                 hotel_id: info[k].hotel_id,
    //                 total_price: info[k].total_price,
    //                 user_id: info[k].user_id,
    //                 hotel_name: info[k].hotel_name,
    //                 hotel_city: info[k].hotel_city,
    //                 hotel_town: info[k].hotel_town,
    //                 hotel_img: info[k].hotel_img,
    //                 key: k
    //             })
              
    //         }
    //         setBookings(bookList);
    //     })

    // },[])

    // routes
    // const hotel = route.params;
    // const room = route.params;
    // const totalPrice = route.params;

    for(let i in bookings){
        console.log(bookings[i].key)
    }
    // onsubmit
    const onSubmit = async () => {

        if (CardInput.valid == false || typeof CardInput.valid == "undefined") {
            ToastAndroid.show('Invalid credit card, please verify your card.')
        //   alert('Invalid Credit Card');
          return false;
        }
    
        let creditCardToken;
        try {
          // Create a credit card token
          creditCardToken = await getCreditCardToken(CardInput);
          // console.log("creditCardToken", creditCardToken)
          if (creditCardToken.error) {
            ToastAndroid.show('Credit card token error, please check your card number.',2000);
            // alert("creditCardToken error");
            return;
          }
        } catch (e) {
          console.log("e",e);
          return;
        }
        // Send a request to your server with the received credit card token
        const { error } = await subscribeUser(creditCardToken);
        // Handle any errors from your server
        if (error) {
        //   alert(error)
          ToastAndroid.show(error,2000);
        } else {
         
          let pament_data = await charges();
          console.log('pament_data', pament_data);
          if(pament_data.status == 'succeeded')
          {
            // alert("Payment Successfully");
            ToastAndroid.show('Your payment was successfully.', 2000);
            // console.log(key);
            db.ref('/bookings/').child(key).update({
                payment_status: 'paid',
                booking_status: 'successful'
            }).then(()=>{
              navigation.navigate('paymentSuccessful');
            }).catch((err)=>{
              ToastAndroid.show(err.message,2000);
            })
            
          }
          
          else{
            // alert('Payment failed');
            ToastAndroid.show('Your payment was unsuccessful', 2000);
          }
        }
      };

    //   charges
    const charges = async () => {

        const card = {
            'amount': 50, 
            'currency': CURRENCY,
            'source': CARD_TOKEN,
            'description': "e-Inns accommodation fee."
          };
    
          return fetch('https://api.stripe.com/v1/charges', {
            headers: {
              // Use the correct MIME type for your server
              Accept: 'application/json',
              // Use the correct Content Type to send data to Stripe
              'Content-Type': 'application/x-www-form-urlencoded',
              // Use the Stripe publishable key as Bearer
              Authorization: `Bearer ${Secret_key}`
            },
            // Use a proper HTTP method
            method: 'post',
            // Format the credit card data to a string of key-value pairs
            // divided by &
            body: Object.keys(card)
              .map(key => key + '=' + card[key])
              .join('&')
          }).then(response => response.json());
      };

    //   _onchange
    const _onChange =(data) => {
        setCardInput(data)
    }

    return (
        <SafeAreaView style={{height: height, width: width}}>
            <View style={{backgroundColor:'#eee', height: height}}>
                 {/* tool bar */}
                 <View style={{ display:'flex',
                    flexDirection: 'row',alignItems:'center',backgroundColor:'#fff', paddingVertical:10,paddingHorizontal:10}}>

                        <TouchableOpacity
                            onPress={() =>navigation.navigate('bookingScreen')}
                            >
                            <Icons name="keyboard-backspace" size={28} color="#000"/>
                        </TouchableOpacity>

                        <View style={{justifyContent: 'center', width: '100%', flex:1}}>
                            <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',}}>Create Payment</Text>
                        </View>

                </View>

                <ScrollView>

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
                            Please check the box below to save card for future payments.
                        </Text>

                    </View>

                    <View style={styles.container}>
                        <Image 
                        source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Stripe_logo%2C_revised_2016.png/1200px-Stripe_logo%2C_revised_2016.png'}}
                        style={styles.ImgStyle}
                        />

                        <CreditCardInput 
                        inputContainerStyle={styles.inputContainerStyle}
                        inputStyle={styles.inputStyle}
                        labelStyle={styles.labelStyle}
                        validColor="#fff"
                        placeholderColor="#ccc"
                        onChange={_onChange}
                         />

                    {/* checkbox */}
                    <View style={{marginHorizontal: 20, 
                        display:'flex',
                        flexDirection: 'column',alignItems:'flex-start',
                        backgroundColor:'transparent', padding:5,
                        borderRadius:2
                        }}>

                        <CheckBox
                            containerStyle={{marginLeft:0, width:'100%', backgroundColor:'transparent',borderColor:'#2471A3'}}
                            title={'Save Details for Future Payments'}
                            checked={checkBoxValue}
                            onPress={() =>setCheckBoxValue(!checkBoxValue)}
                            checkedColor='#2471A3'
                            textStyle={{color:'rgba(0, 0, 0, 0.45)'}}
                        />

                    </View>

                    <TouchableOpacity 
                        onPress={onSubmit}
                        style={styles.button}>
                            <Text
                            style={styles.buttonText}>
                            Pay Now
                            </Text>
                    </TouchableOpacity>
                    
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    height: height,
    paddingHorizontal:10
    
},
ImgStyle: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 8,
},
button : {
    backgroundColor:'#2471A3',
    width:150,
    height:45,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
    borderRadius:5
},
buttonText : {
    fontSize: 15,
    color: '#f4f4f4',
    fontWeight:'bold',
    textTransform:'uppercase'
},
inputContainerStyle : {
    backgroundColor:'#fff',
    borderRadius:5,
},
inputStyle : {
    backgroundColor:'#222242',
    paddingLeft:15,
    borderRadius:5,
    color:'#fff'
},
labelStyle : {
    marginBottom:5,
    fontSize:12
}

});

export default StripePaymentScreen