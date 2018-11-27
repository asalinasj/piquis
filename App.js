import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,
        createDrawerNavigator,
        createBottomTabNavigator} from 'react-navigation';
import Login from './src/components/Login/Login';
import Profile from './src/components/Profile/Profile';
import CreateAccount from './src/components/SignUp/CreateAccount';
import Home from './src/components/Home/Home';
import Results from './src/components/Results/Results';
import {Drawer} from './src/routes';

export default class App extends Component {
  render(){
    //separated Navigation into another component routes.js
    return(
      <Drawer />
    );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
