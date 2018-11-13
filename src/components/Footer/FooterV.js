import React, {Component} from 'react';
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
import { createStackNavigator } from 'react-navigation';
import profile_icon from '../../../assets/profile_icon.png';
import home_icon from '../../../assets/home_icon.png';
import settings_icon from '../../../assets/settings_icon.png';
import Home from '../Home/Home'
import Profile from '../Profile/Profile';
import { withNavigation } from 'react-navigation';

//const {navigate} = this.props.navigation;
const FooterV = (props) => {
    return (
        <Footer>
          <FooterTab>
            <Button vertical onPress={props.navHome}>
              <Icon 
                name="home"
               />
            </Button>
            <Button active onPress={props.navProfile}>
              <Icon name="person" />
            </Button>
            <Button vertical>
              <Icon name="settings" />
            </Button>
          </FooterTab>
        </Footer>
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
