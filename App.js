import React, { Component } from "react";
import { Header } from 'react-native-elements';
import { View,StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BottomTabNavigator from "./components/BottomTabNavigator";

export default class App extends Component {
  render() {

    //return <BottomTabNavigator>;
    //<BottomTabNavigator />;
    return(
      <SafeAreaProvider>
      <View style={styles.container}>
      <Header
            backgroundColor={'#DEB887'}
            centerComponent={{
              text: 'TRAVESÍA DIGITAL ٩(˘◡˘)۶.',
              style: { color: '#000000', fontSize: 12 },
            }}
          />

      <BottomTabNavigator/>
      </View>
      </SafeAreaProvider>
    );
    //return <BottomTabNavigator> <BottomTabNavigator />;
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})