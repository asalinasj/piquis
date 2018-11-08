import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import HomeV from './HomeV.js';
import {
    Container,
    Header,
    Left,
    Body,
    Right, Button, Icon, Title,
    Content, Footer, FooterTab, Badge } from 'native-base';
import FooterV from '../Footer/FooterV.js';
import Profile from '../Profile/Profile';



class Home extends React.Component{

  profilePage = () => {
    this.props.navigation.navigate('Profile');
  }

    render(){
        return(
          <View>
            <HomeV
              profile = {this.profilePage}
              />
            <FooterV />
          </View>
        );
    }
}
export default Home;
