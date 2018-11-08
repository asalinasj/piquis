import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,
        createDrawerNavigator,
        createBottomTabNavigator} from 'react-navigation';
import Login from './src/components/Login/Login';
import Profile from './src/components/Profile/Profile';
import CreateAccount from './src/components/SignUp/CreateAccount';
import Home from './src/components/Home/Home';

export default App = createStackNavigator({
  Login: { screen: Login},
  Home: { screen: Home},
  Profile: { screen: Profile},
  CreateAccount: { screen: CreateAccount},
  }, {
    headerMode: 'none',
    initialRouteName: 'Login',

})


/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
