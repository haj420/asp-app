import 'react-native-gesture-handler';
import React, {Component, useEffect, useState } from 'react';
import { ImageBackground, Button, View, Text, StyleSheet, TouchableOpacity, Image, Linking, StatusBar, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import InAppBrowser from 'react-native-inappbrowser-reborn'; //not working yet.

//const whatsNewUrl = "https://mailchi.mp/16329d7c7291/asp-apology-and-promise-4799221?e=b29be04e9c"
const jsCode = "window.postMessage(document.getElementById('newLink').innerHTML)"

function SplashScreen({ navigation }) {
// SPLASH SCREEN
  return (
    <View
	style={styles.splashContainer}>
      <Image source={require('./assets/aspBanner.png')} style={styles.SplashBanner} />
      <TouchableOpacity onPress={() =>{navigation.push('BrandsScreen')}}>
	  <Image source={require('./assets/x-red-circle.png')} style={{width:35,height:35}}  />
      </TouchableOpacity>
	  <WebView
    javaScriptEnabled={true}
    injectedJavaScript={jsCode}
    source={{uri: 'https://autoformsandsupplies.com/eblast.html'}}
    onMessage={event => console.log('Received: ', event.nativeEvent.data)}
	style={{width:370}}
  />
    </View>
  );
}

// BRANDS SCREEN
function BrandsScreen({ navigation }) {
	return (
		<ScrollView style={{backgroundColor:'white'}}>
		<View style={{flex:1, backgroundColor:'white'}}>
			<View style={{ height:50, backgroundColor: 'red' }} />
			<TouchableOpacity
			  onPress={() =>{navigation.push('Home')}}>
				<Image source={require('./assets/hamburgerMenu.png')} style={{alignSelf:'flex-end'}} />
			</TouchableOpacity>
	        <Image source={require('./assets/ASP-logo-black-red-PMS1788-1inDistCare-150dpi.png')} style={styles.brandsBanner, {alignSelf:'center', marginTop:'5%'}} />
			<View style={{borderTopColor:'black', borderTopWidth:1, height:'5%', marginTop:30, marginBottom:0}} />
			<TouchableOpacity
			  onPress={() =>{ WebBrowser.openBrowserAsync("https://www.autoserviceproducts.com/wp-content/uploads/ASP_product-brand-guide_031721.pdf")}}>
				<Image source={require('./assets/ourBrands.png')} style={{alignSelf:'flex-end', height:45, width:260, marginTop:0, alignSelf:'center'}} />
			</TouchableOpacity>

			<View style={{flex: 1, flexDirection: 'row'}}>
			   <View style={{width: '50%', height:100, justifyContent:'center'}} >
			   <TouchableOpacity
				 onPress={() =>{ WebBrowser.openBrowserAsync("https://www.autoserviceproducts.com/wp-content/uploads/CAATS-Brand-Sheet-210601.pdf")}}>
				   <Image source={require('./assets/CAATS.png')} style={styles.TopHomeScreenButton, {width:'80%', resizeMode:'contain', alignSelf:'center'}}/>
			   </TouchableOpacity>
			   </View>
			   <View style={{width: '50%', height:100, justifyContent:'center'}}>
			   <TouchableOpacity
				 onPress={() =>{ WebBrowser.openBrowserAsync("https://www.autoserviceproducts.com/wp-content/uploads/TruForm-Brand-Sheet-210716-flattened.pdf")}}>
				   <Image source={require('./assets/TruForm.jpeg')} style={styles.TopHomeScreenButton, {width:'80%', resizeMode:'contain', alignSelf:'center'}}/>
			   </TouchableOpacity>
			   </View>
			 </View>
			 <View style={{flex: 1, flexDirection: 'row'}}>
 			   <View style={{width: '50%', height:100, justifyContent:'center'}} >
 			   <TouchableOpacity
 				 onPress={() =>{ WebBrowser.openBrowserAsync("https://www.autoserviceproducts.com/wp-content/uploads/Heavy-Brite-Brand-Sheet-210706-flattened.pdf")}}>
 				   <Image source={require('./assets/HeavyBrite.png')} style={styles.TopHomeScreenButton, {width:'80%', resizeMode:'contain', alignSelf:'center'}}/>
 			   </TouchableOpacity>
 			   </View>
 			   <View style={{width: '50%', height:100, justifyContent:'center'}}>
 			   <TouchableOpacity
 				 onPress={() =>{ WebBrowser.openBrowserAsync("https://www.autoserviceproducts.com/wp-content/uploads/Safe-Shield-Brand-Sheet-210716-flattened.pdf")}}>
 				   <Image source={require('./assets/SafeShield.jpeg')} style={styles.TopHomeScreenButton, {width:'80%', resizeMode:'contain', alignSelf:'center'}}/>
 			   </TouchableOpacity>
 			   </View>
 			 </View>
			 <View style={{flex: 1, flexDirection: 'row'}}>
 			   <View style={{width: '50%', height:100, justifyContent:'center'}} >
 			   <TouchableOpacity
 				 onPress={() =>{ WebBrowser.openBrowserAsync("https://www.autoserviceproducts.com/wp-content/uploads/AdVer-Tag-Brand-Sheet-210716-flattened.pdf")}}>
 				   <Image source={require('./assets/AdVerTag.png')} style={styles.TopHomeScreenButton, {width:'80%', resizeMode:'contain', alignSelf:'center'}}/>
 			   </TouchableOpacity>
 			   </View>
 			   <View style={{width: '50%', height:100, justifyContent:'center'}}>
 			   <TouchableOpacity
 				 onPress={() =>{ WebBrowser.openBrowserAsync("https://www.autoserviceproducts.com/wp-content/uploads/ViZi-Brand-Sheet-210601-flattened.pdf")}}>
 				   <Image source={require('./assets/Vizilogo.png')} style={styles.TopHomeScreenButton, {width:'80%', resizeMode:'contain', alignSelf:'center'}}/>
 			   </TouchableOpacity>
 			   </View>
 			 </View>
			 <View style={{flex: 1, flexDirection: 'row'}}>
 			   <View style={{width: '50%', height:100, justifyContent:'center'}} >
 			   <TouchableOpacity
 				 onPress={() =>{ WebBrowser.openBrowserAsync("https://www.autoserviceproducts.com/wp-content/uploads/Peel-n-Seal-Brand-Sheet-210716-flattened.pdf")}}>
 				   <Image source={require('./assets/PeelNSeal.png')} style={styles.TopHomeScreenButton, {width:'80%', resizeMode:'contain', alignSelf:'center'}}/>
 			   </TouchableOpacity>
 			   </View>
 			   <View style={{width: '50%', height:100, justifyContent:'center'}}>
 			   <TouchableOpacity
 				 onPress={() =>{ WebBrowser.openBrowserAsync("https://www.autoserviceproducts.com/wp-content/uploads/File-Right-Brand-Sheet-210601-flattened.pdf")}}>
 				   <Image source={require('./assets/fileRight.png')} style={styles.TopHomeScreenButton, {width:'80%', resizeMode:'contain', alignSelf:'center'}}/>
 			   </TouchableOpacity>
 			   </View>
 			 </View>
			 <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
			 	<Text style={{paddingLeft:'5%', paddingRight:'5%'}}>Click each logo to learn how that exciting product line can help you increase sales and deepen customer loyalty!</Text>
			 </View>
		</View>
	  </ScrollView>
  );
}

// HOME SCREEN  (Now the menu screen)
function HomeScreen({ navigation }) {
  return (
	    <View style={styles.container}>
			<View style={{ height:50, backgroundColor: 'red' }} />
			<View style={{flexDirection: 'row'}}>
			   <View style={{width: '20%', height:100, justifyContent:'center'}} >
				   <TouchableOpacity
					 onPress={() =>{navigation.push('BrandsScreen')}}>
				   <Image source={require('./assets/backArrow.png')} style={{alignSelf:'flex-start'}}/>
				   </TouchableOpacity>
			   </View>
		   	   <View style={{width: '60%', height:100, justifyContent:'center'}} >
				   <Text style={{alignSelf:'center', fontSize:20}}>
				   Menu
				   </Text>
			   </View>
		  	</View>
		        <Image source={require('./assets/aspBanner.png')} style={styles.logoBanner} />

		        <TouchableOpacity
		          onPress={() =>{ WebBrowser.openBrowserAsync("https://shop.autoserviceproducts.com/landing.asp?autopage=/Default.asp")}}>
		        <Image source={require('./assets/aspConnectBtn.png')} style={styles.TopHomeScreenButton}/>
		        </TouchableOpacity>

		        <TouchableOpacity
		          onPress={() =>{ WebBrowser.openBrowserAsync("https://autoformsandsupplies.cld.bz/AUTO-CAT-2021")}}>
		        <Image source={require('./assets/catalogBtn.png')} style={styles.HomeScreenButton}/>
		        </TouchableOpacity>

		        <TouchableOpacity
		          onPress={() =>{ WebBrowser.openBrowserAsync("https://shop.autoserviceproducts.com/landing.asp?autopage=/Default.asp")}}>
		        <Image source={require('./assets/prodBtn.png')} style={styles.HomeScreenButton}/>
		        </TouchableOpacity>

		        <TouchableOpacity
		          onPress={() =>{navigation.push('SendPhoto')}}>
		        <Image source={require('./assets/sendBtn.png')} style={styles.HomeScreenButton}/>
		        </TouchableOpacity>

		        <TouchableOpacity
		          onPress={() =>{navigation.push('BeSocial')}}>
		        <Image source={require('./assets/socialBtn.png')} style={styles.HomeScreenButton}/>
		        </TouchableOpacity>

		        <TouchableOpacity
		          onPress={() =>{navigation.push('ContactUs')}}>
		        <Image source={require('./assets/contactBtn.png')} style={styles.HomeScreenButton}/>
		        </TouchableOpacity>
	    </View>
  );
}

function SendPhotoScreen({ navigation }) {
// SEND PHOTO SCREEN
  return (
    <View style={styles.container}>
	<View style={{ height:50, backgroundColor: 'red' }} />
<View style={{flexDirection: 'row'}}>
   <View style={{width: '20%', height:100, justifyContent:'center'}} >
   <TouchableOpacity
	 onPress={() =>{navigation.push('Home')}}>
   <Image source={require('./assets/backArrow.png')} style={{alignSelf:'flex-start'}}/>
   </TouchableOpacity>
   </View>
   <View style={{width: '60%', height:100, justifyContent:'center'}} >
   <Text style={{alignSelf:'center', fontSize:20}}>
   Send a Photo
   </Text>
   </View>
</View>
      <Image source={require('./assets/aspBanner.png')} style={styles.SendPhotoBanner} />

      <Text>Use this feature to send us a photo of any item requested by your customer that you cannot find! Our research team will find it and handle the order!</Text>
      <Button style={styles.button}
        title="Send Photo"
        onPress={() => Linking.openURL('mailto:CustomerService@AutoServiceProducts.com?subject=ASP Send Photo Submission&body=Dear ASP,') }/>
    </View>
  );
}


function BeSocialScreen({ navigation }) {
// SEND SOCIAL PHOTO
  return (
    <View style={styles.container}>
	<View style={{ height:50, backgroundColor: 'red' }} />
<View style={{flexDirection: 'row'}}>
   <View style={{width: '20%', height:100, justifyContent:'center'}} >
   <TouchableOpacity
	 onPress={() =>{navigation.push('Home')}}>
   <Image source={require('./assets/backArrow.png')} style={{alignSelf:'flex-start'}}/>
   </TouchableOpacity>
   </View>
   <View style={{width: '60%', height:100, justifyContent:'center'}} >
   <Text style={{alignSelf:'center', fontSize:20}}>
   Be Social
   </Text>
   </View>
</View>
      <Image source={require('./assets/aspBanner.png')} style={styles.SendPhotoBanner} />


      <Text style={{marginTop:20}}>Use this feature to send us a photo for use on ASP social media! For example, share a photo of a neat idea you handled for a dealer and then watch us on LinkedIn and Facebook to see ideas from others. </Text>
      <Button style={styles.button}
        title="Send Photo"
        onPress={() => Linking.openURL('mailto:CustomerService@AutoServiceProducts.com?subject=ASP Social&body=Dear ASP,') }/>
      <Text>*Submission of a photo constitutes your permission for its publication on ASP social media.</Text>
    </View>
  );
}


function ContactUsScreen({ navigation }) {
// Contact Us Screen
  return (

      <ScrollView style={{flex: 1,flexDirection: 'column', backgroundColor:'white'}}>
		  <View style={{ height:50, backgroundColor: 'red' }} />
	  <View style={{flexDirection: 'row'}}>
		 <View style={{width: '20%', height:100, justifyContent:'center'}} >
		 <TouchableOpacity
		   onPress={() =>{navigation.push('Home')}}>
		 <Image source={require('./assets/backArrow.png')} style={{alignSelf:'flex-start'}}/>
		 </TouchableOpacity>
		 </View>
		 <View style={{width: '60%', height:100, justifyContent:'center'}} >
		 <Text style={{alignSelf:'center', fontSize:20}}>
		 Contact Us
		 </Text>
		 </View>
	</View>
		  <Image source={require('./assets/aspBanner.png')} style={styles.logoBanner} />
        <View style={styles.contactLabels}>
          <Text style={styles.contactH1, {color:'red', marginTop:30, fontSize:18, fontWeight:'bold'}}>PHONE</Text>
        </View>
        <View style={styles.contactLabels}>
          <Text style={styles.contactText}>Our goal is to answer your questions on the first call.</Text>
        </View>

        <View style={styles.contactLabels, {flexDirection:'row', marginLeft:10, marginTop:20, alignItems:'center'}}>
			<View style={{flex:1}}>
	          <Text style={styles.contactH2}>Local</Text>
			</View>
			<View style={{flex:1}}>
	          <TouchableOpacity onPress={() => Linking.openURL('tel:${8595252220}') }>
	            <Text style={styles.contactText}>859-525-2220</Text>
	          </TouchableOpacity>
	        </View>
		</View>
        <View style={styles.contactLabels, {flexDirection:'row', marginLeft:10, alignItems:'center'}}>
			<View style={{flex:1}}>
          <Text style={styles.contactH2}>TOLL FREE</Text>
		  </View>

  			<View style={{flex:1}}>
          <TouchableOpacity onPress={() => Linking.openURL('tel:${8008435443') }>
            <Text style={styles.contactText}>800-843-5443</Text>
          </TouchableOpacity>
		  </View>
        </View>

        <View style={styles.contactLabels}>
          <Text style={styles.contactH1}>EMAIL</Text>
            <Text style={styles.contactH2}>Orders</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:Orders@AutoServiceProducts.com?subject=Order Info&body=Dear ASP Orders,') }>
              <Text style={styles.contactText, {textDecorationLine:'underline'}}>orders@autoserviceproducts.com</Text>
            </TouchableOpacity>

            <Text style={styles.contactH2}>Sales</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:Sales@AutoServiceProducts.com?subject=Sales Info&body=Dear ASP Sales,') } >
              <Text style={styles.contactText, {textDecorationLine:'underline'}}>sales@autoserviceproducts.com</Text>
            </TouchableOpacity>

           <Text style={styles.contactH2}>Service</Text>
           <TouchableOpacity onPress={() => Linking.openURL('mailto:CustomerService@AutoServiceProducts.com?subject=Customer Service Info&body=Dear ASP Customer Service,') }>
             <Text style={styles.contactText, {textDecorationLine:'underline'}}>customerservice@autoserviceproducts.com</Text>
           </TouchableOpacity>

           <Text style={styles.contactH2}>Artwork</Text>
           <TouchableOpacity onPress={() => Linking.openURL('mailto:artwork@AutoServiceProducts.com?subject=Artwork&body=Dear ASP,') }>
            <Text style={styles.contactText, {textDecorationLine:'underline'}}>artwork@autoserviceproducts.com</Text>
           </TouchableOpacity>
            <Text style= {styles.contactAddyH1}>MAILING ADDRESS</Text>
            <Text style= {styles.contactText}>Automotive Service Products</Text>
            <Text style= {styles.contactText}>P.O. Box 951</Text>
           <Text style= {styles.contactText}>Burlington, KY 41005</Text>

           <Text style= {styles.contactAddyH1}>SHIPPING ADDRESS</Text>
           <Text style= {styles.contactText}>Automotive Service Products</Text>
           <Text style= {styles.contactText}>1574 Production Drive</Text>
           <Text style= {styles.contactText}>Burlington, KY 41005</Text>
        </View>
      </ScrollView>

  );
}

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer screenOptions={{headerTransparent: true}} >
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false, headerTransparent: true}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="BrandsScreen" component={BrandsScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SendPhoto" component={SendPhotoScreen} />
        <Stack.Screen name="BeSocial" component={BeSocialScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  topRedBar: {
	flex:1,
	backgroundColor:'red',

  },
  brandsBanner: {
	width:'80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashContainer: {
	  flex:1,
      backgroundColor: 'white',
       justifyContent: 'flex-start',
       alignItems: 'flex-start',
       padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Background: {
    flex: 1,
    resizeMode: "cover",
  },
  logoBanner: {
    width: '100%',
    height: '20%',
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
    height: '20%',
    top:0,
    alignSelf: 'center',
  },
  SplashBanner: {
    width: '100%',
    height: 150,
    top:0,
  },
  ContactUsBanner: {
    width: '100%',
    height: '15%',
    top:0,
  },
  TopHomeScreenButton: {
    marginTop:10,
    alignSelf: 'center',
    width: 350,
    resizeMode: 'contain',
  },
  HomeScreenButton: {
    marginTop:7,
    alignSelf: 'center',
    width: 300,
	height: 50,
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
    backgroundColor: 'white',
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
    marginTop:20,
    color: 'red',
    alignSelf:'flex-start',
    fontSize:18,
    fontWeight:'bold',
    flex:1
  },
  contactH2: {
	marginTop:10,
    color: 'black',
    alignSelf:'flex-start',
    fontWeight:'bold',
    fontSize:16,
    flex:1
  },
  contactAddyH1: {
    marginTop:10,
    color: 'red',
    alignSelf:'flex-start',
    fontSize:18,
    fontWeight:'bold',
    flex:1
  },
  contactText: {
    color: 'black',
    alignSelf:'flex-start',
    fontSize:12,
}
});
export default App;
