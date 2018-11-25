import React from 'react';
import { StyleSheet, Text, Image, View, Platform, TouchableOpacity } from 'react-native';
import {createStackNavigator,
        createDrawerNavigator,
        createBottomTabNavigator, 
        createMaterialTopTabNavigator} from 'react-navigation';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import CreateAccount from './components/SignUp/CreateAccount';
import Home from './components/Home/Home';
import Results from './components/Results/Results';

const MainNavigator = createStackNavigator({
  Login: { screen: Login},
  Home: {screen: Home},
  Profile: { screen: Profile},
  CreateAccount: { screen: CreateAccount},
  Results: {screen: Results},
  }, {
    headerMode: 'none',
    initialRouteName: 'Login',

})

export const Drawer = createDrawerNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      title: 'Sign Out'
    }),
  },
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home'
    }), 
  },
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      title: ''
    }),
  },
  Results: {
    screen: Results,
    navigationOptions: () => ({
      title: ''
    }),
  },
}, {
    drawerPosition: 'right',
   }
);


/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
