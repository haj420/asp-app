import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';
import headerbackground from './assets/headerbackground.jpg';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={headerbackground} style={styles.logo} />

      <Button
      style={{flex:.8, justifyContent: 'center', alignSelf: 'stretch'}}
        title="ASP Connect"
        onPress={() => Linking.openURL = ("https://shop.autoserviceproducts.com/landing.asp?autopage=/Default.asp")}
      />

      <Button
        title="Catalog"
        onPress={() => Linking.openURL = ("http://autoservice-catalog.wspdev.com/featured_categories.asp")}
      />
      <Button
        title="Product Lookup"
        onPress={() => Linking.openURL = ("https://shop.autoserviceproducts.com/landing.asp?autopage=/Default.asp")}
      />
      <Button
        title="Send Photo"
        onPress={() => navigation.push('SendPhoto')}
      />
    </View>
  );
}

function SendPhotoScreen({ navigation }) {
// SEND PHOTO SCREEN
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch', width: "100%" }}>
      <Text>Use this feature to send us a photo of any item requested by your customer that you cannot find! Our research team will find it and handle the order!</Text>
      <Button style={styles.button}
        title="Send Photo"
        onPress={() => Linking.openURL = ("mailto:productresearch@autoserviceproducts.com") }
        title='Product Research'
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SendPhoto" component={SendPhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    alignSelf:'stretch',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width: 370,
    height: 159,
    top:0,
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
    width:'100%',
    alignSelf:'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
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
});
export default App;
