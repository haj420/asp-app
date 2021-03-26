import 'react-native-gesture-handler';
import React, {Component, useEffect, useState } from 'react';
import { ImageBackground, Button, View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, Image, Linking, StatusBar, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import InAppBrowser from 'react-native-inappbrowser-reborn'; //not working yet.

const whatsNewUrl = "https://mailchi.mp/16329d7c7291/asp-apology-and-promise-4799221?e=b29be04e9c"
const jsCode = "window.postMessage(document.getElementById('newLink').innerHTML)"

function SplashScreen({ navigation }) {
// SPLASH SCREEN
  return (
    <View
	style={styles.container}>

      <Image source={require('./assets/headerbackground.jpg')} style={styles.SplashBanner} />
      <TouchableHighlight
          onPress={() =>{navigation.push('Home')}}>
        <AntDesign name="closecircle" size={34} color="red" styles={styles.close} />
        </TouchableHighlight>



  <WebView
    javaScriptEnabled={true}
    injectedJavaScript={jsCode}
    source={{uri: 'https://mailchi.mp/16329d7c7291/asp-apology-and-promise-4799221?e=b29be04e9c'}}
    onMessage={event => console.log('Received: ', event.nativeEvent.data)}
  />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/BACKGROUND.png')} style={styles.Background}>

        <Image source={require('./assets/headerbackground.jpg')} style={styles.logoBanner} />

        <TouchableHighlight
          onPress={() =>{ WebBrowser.openBrowserAsync("https://shop.autoserviceproducts.com/landing.asp?autopage=/Default.asp")}}>
        <Image source={require('./assets/ASP_CONNECT-button.png')} style={styles.TopHomeScreenButton}/>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() =>{ WebBrowser.openBrowserAsync("http://autoservice-catalog.wspdev.com/featured_categories.asp")}}>
        <Image source={require('./assets/Catalog-button.png')} style={styles.HomeScreenButton}/>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() =>{ WebBrowser.openBrowserAsync("https://shop.autoserviceproducts.com/landing.asp?autopage=/Default.asp")}}>
        <Image source={require('./assets/Product_Lookup-button.png')} style={styles.HomeScreenButton}/>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() =>{navigation.push('SendPhoto')}}>
        <Image source={require('./assets/Send_Photo-button.png')} style={styles.HomeScreenButton}/>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() =>{navigation.push('BeSocial')}}>
        <Image source={require('./assets/Be_Social-button.png')} style={styles.HomeScreenButton}/>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() =>{navigation.push('ContactUs')}}>
        <Image source={require('./assets/Contact_us-button.png')} style={styles.HomeScreenButton}/>
        </TouchableHighlight>

    </ImageBackground>
  </View>
  );
}

function SendPhotoScreen({ navigation }) {
// SEND PHOTO SCREEN
  return (
    <View style={styles.container}>
      <Image source={require('./assets/headerbackground.jpg')} style={styles.SendPhotoBanner} />
      <TouchableHighlight
          onPress={() =>{navigation.push('Home')}}>
        <AntDesign name="leftcircle" size={24} color="red" />
        </TouchableHighlight>
      <Text>Use this feature to send us a photo of any item requested by your customer that you cannot find! Our research team will find it and handle the order!</Text>
      <Button style={styles.button}
        title="Send Photo"
        onPress={() => Linking.openURL('mailto:wkstart@startadvertising.com?subject=ASP APP EMAIL TEST&body=Dear ASP,') }/>
    </View>
  );
}


function BeSocialScreen({ navigation }) {
// SEND SOCIAL PHOTO
  return (
    <View style={styles.container}>

      <Image source={require('./assets/headerbackground.jpg')} style={styles.SendPhotoBanner} />

      <TouchableHighlight
          onPress={() =>{navigation.push('Home')}}>
        <AntDesign name="leftcircle" size={24} color="red" />
        </TouchableHighlight>
      <Text>Use this feature to send us a photo for use on ASP social media! For example, share a photo of a neat idea you handled for a dealer and then watch us on LinkedIn and Facebook to see ideas from others. You could WIN our mothly "BEST PHOTO" prize!</Text>
      <Button style={styles.button}
        title="Send Photo"
        onPress={() => Linking.openURL('mailto:wkstart@startadvertising.com?subject=ASP Social&body=Dear ASP,') }/>
      <Text>*Submission of a photo constitutes your permission for its publication on ASP social media.</Text>
    </View>
  );
}


function ContactUsScreen({ navigation }) {
// SEND SOCIAL PHOTO
  return (
  <ImageBackground source={require('./assets/BACKGROUND.png')} style={styles.Background}>

      <ScrollView style={{flex: 1,flexDirection: 'column'}}>

        <Image source={require('./assets/headerbackground.jpg')} style={styles.ContactUsBanner} />
        <Image source={require('./assets/ASP_logo_sm.png')} style={styles.ASPLogoSm} />
        <TouchableHighlight
            onPress={() =>{navigation.push('Home')}}>
          <AntDesign name="leftcircle" size={24} color="red" />
          </TouchableHighlight>
        <View style={styles.contactLabels}>
          <Text style={styles.contactH1}>PHONE</Text>
        </View>
        <View style={styles.contactLabels}>
          <Text style={styles.contactText}>Our goal is to answer your questions on the first call.</Text>
        </View>

        <View style={styles.contactLabels}>
          <Text style={styles.contactH1}>Local</Text>
          <TouchableHighlight onPress={() => Linking.openURL('tel:${8595252220}') }>
            <Text style={styles.contactText}>859-525-2220</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.contactLabels}>
          <Text style={styles.contactH1}>TOLL FREE</Text>
          <TouchableHighlight onPress={() => Linking.openURL('tel:${8008435443') }>
            <Text style={styles.contactText}>800-843-5443</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.contactLabels}>
          <Text style={styles.contactH1}>EMAIL</Text>
            <Text style={styles.contactH2}>Orders</Text>
            <TouchableHighlight onPress={() => Linking.openURL('mailto:wkstart@startadvertising.com?subject=Order Info&body=Dear ASP Orders,') }>
              <Text style={styles.contactText}>Orders@AutoServieProducts.com</Text>
            </TouchableHighlight>

            <Text style={styles.contactText}>Sales</Text>
            <TouchableHighlight onPress={() => Linking.openURL('mailto:wkstart@startadvertising.com?subject=Sales Info&body=Dear ASP Orders,') }>
              <Text style={styles.contactText}>Sales@AutoServieProducts.com</Text>
            </TouchableHighlight>

           <Text style={styles.contactText}>Service</Text>
           <TouchableHighlight onPress={() => Linking.openURL('mailto:wkstart@startadvertising.com?subject=Customer Service Info&body=Dear ASP Orders,') }>
             <Text style={styles.contactText}>CustomerService@AutoServieProducts.com</Text>
           </TouchableHighlight>

           <Text style= {styles.contactAddyH1}>MAILING ADDRESS</Text>
           <Text style= {styles.contactH2}>Automotive Service Products</Text>
           <Text style= {styles.contactH2}>P.O. Box 951</Text>
           <Text style= {styles.contactH2}>Burlington, KY 41005</Text>

           <Text style= {styles.contactAddyH1}>SHIPPING ADDRESS</Text>
           <Text style= {styles.contactH2}>Automotive Service Products</Text>
           <Text style= {styles.contactH2}>1574 Production Drive</Text>
           <Text style= {styles.contactH2}>Burlington, KY 41005</Text>
        </View>
      </ScrollView>
    </ImageBackground>

  );
}

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer screenOptions={{headerTransparent: true}} >
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false, headerTransparent: true}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SendPhoto" component={SendPhotoScreen} />
        <Stack.Screen name="BeSocial" component={BeSocialScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  splashContainer: {
	  flex:1,
      backgroundColor: '#fff',
       justifyContent: 'center',
       alignItems: 'center',
       padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Background: {
    flex: 1,
    resizeMode: "cover",
  },
  logoBanner: {
    width: '100%',
    height: 259,
    top:0,
  },
  close: {
    alignSelf:'flex-start',
	margin:100,
    position: 'absolute',
    left:     50,
    top:      320,
    zIndex:9999
  },
  leftcircle: {
    alignSelf:'flex-start',
    position: 'absolute',
    left:     5,
    top:      220,
    zIndex:9999
  },
  SendPhotoBanner: {
    width: '100%',
    height: 259,
    top:0,
    alignSelf: 'center',
  },
  SplashBanner: {
    width: '100%',
    height: 70,
    top:0,
  },
  ContactUsBanner: {
    width: '100%',
    height: 200,
    top:0,
  },
  TopHomeScreenButton: {
    marginTop:40,
    alignSelf: 'center',
    width: 300,
    resizeMode: 'contain',
  },
  HomeScreenButton: {
    marginTop:2,
    alignSelf: 'center',
    width: 300,
    resizeMode: 'contain',
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    height:70,
    width: '100%',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    fontSize: 15,
    color:'white',
  },
  buttonText: {
    fontSize:24,
    color: 'white'
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  contactUs: {
    alignItems: 'flex-start',
    textAlign: 'left',
    flex: 1,
    backgroundColor: '#fff',
  },
  contactUs: {
    alignItems: 'flex-start',
    textAlign: 'left',
    flex: 1,
    backgroundColor: '#fff',
  },
  ASPLogoSm: {
    width:200,
    height:100,
    alignSelf:'center',
    resizeMode:'contain',
  },
  Contactbutton: {
    color: 'white',
    alignSelf:'flex-end',
    paddingLeft:'0px',
    fontSize:5,
  },
  contactLabels: {
    alignItems: 'flex-start',
    paddingLeft: 10,
    flex:1
  },
  contactH1: {
    marginTop:3,
    color: 'white',
    alignSelf:'flex-start',
    fontSize:18,
    fontWeight:'bold',
    flex:1
  },
  contactH2: {
    color: 'white',
    alignSelf:'flex-start',
    fontSize:16,
    flex:1
  },
  contactAddyH1: {
    marginTop:10,
    color: 'white',
    alignSelf:'flex-start',
    fontSize:18,
    fontWeight:'bold',
    flex:1
  },
  contactText: {
    color: 'white',
    alignSelf:'flex-start',
    fontSize:12,
  }
});
export default App;
