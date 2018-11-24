import React, {Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import {createStackNavigator,
        createDrawerNavigator,
        createBottomTabNavigator} from 'react-navigation';
import Login from './src/components/Login/Login';
import Profile from './src/components/Profile/Profile';
import CreateAccount from './src/components/SignUp/CreateAccount';
import Home from './src/components/Home/Home';
import Results from './src/components/Results/Results';
import { MainNavigator } from './routes';

export default class App extends Component{
  render(){
    return(
      <MainNavigator />
    );
  }
}
//AppRegistry.registerComponent('piquis', () => App);


/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
