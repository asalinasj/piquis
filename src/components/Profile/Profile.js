import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ProfileV from './ProfileV.js';
import {
    Container,
    Header,
    Left,
    Body,
    Right, Button, Icon, Title,
    Content, Footer, FooterTab, Badge } from 'native-base';
import FooterV from '../Footer/FooterV.js';
import Login from '../Login/Login';
import Home from '../Home/Home';


class Profile extends React.Component{

  homePage = () => {
    this.props.navigation.navigate('Home');
  }

    render(){
        return(
          <View>
            <ProfileV 
              home = {this.homePage}
              />
            <FooterV />
          </View>
        );
    }
}
export default Profile;
