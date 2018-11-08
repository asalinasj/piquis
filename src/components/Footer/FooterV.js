import React, {Component}from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Right, Button, Icon, Title,
    Content, Footer, FooterTab, Badge } from 'native-base';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    Image,
    ImageBackground,
  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import profile_icon from '../../../assets/profile_icon.png';
import home_icon from '../../../assets/home_icon.png';
import settings_icon from '../../../assets/settings_icon.png';

const FooterV = (props) => {
    return (
        <View style = {styles.MainContainer}>
          <Button style = {styles.profile}>
            <Image
              style = {styles.size}
              source={require('../../../assets/profile_icon.png')}
              />
          </Button>
          <Button style = {styles.home}>
            <Image
              style = {styles.size}
              source={require('../../../assets/home_icon.png')}
              />
          </Button>
          <Button style = {styles.settings}>
            <Image
              style = {styles.size}
              source={require('../../../assets/settings_icon.png')}
              />
          </Button>
        </View>
    );
}

export default FooterV;


const styles = StyleSheet.create({
    MainContainer: {
      paddingTop: 3,
      marginTop: 688,
      height: 48,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: 'rgb(255, 255, 255)',
      borderTopWidth: 0,
    },

    size: {
      height: 29,
      width: 29,
    },

    profile: {
      paddingRight: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },

    home: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },

    settings: {
      paddingLeft: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    }
  });
