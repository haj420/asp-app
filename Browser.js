// Name: Browser.js
// Desc: This is a js page to handle webpage
//       view requests to prevent the user
//       from leaving the app.
// Note: This does not yet work and is also
//       not incorperated into the main page.

import React, {Component} from 'react'
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import WebView from 'react-native-webview'
const BackButton = ({ navigation }) =>
  <TouchableOpacity onPress={() => {
    navigation.goBack()
  }}>
    <Text>&lt; Back</Text>
  </TouchableOpacity>

export default class Browser extends Component {

  static navigationOptions = ({ navigation }) => ({
    Title: 'Browser',
    headerLeft:<BackButton navigation={navigation} />
  })
  render() {
    return (
      <View style={{flex:1}}>
        <WebView
          source={{
              uri:this.props.navigation.state.params.url
          }}
          style={{flex:1}}
          />
      </View>
    )
  }
}
