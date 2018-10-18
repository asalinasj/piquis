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
import Login from '../Login/Login';



class Profile extends React.Component{

    render(){
        return(
          <View>
            <HomeV />
            <FooterV />
          </View>
        );
    }
}
export default Profile;
