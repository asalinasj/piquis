import React from 'react';
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
  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import SearchHeader from '../SearchBar/SearchHeader.js';
import piquis_text from '../../piquis_text.png';
import Profile from './Profile';

const ProfileV = (props) => {

    return (
      <Container style={styles.MainContainer}>
        <Header style = {styles.header}>
          <Right></Right>
          <Body>
            <Button
              style = {styles.button}
              onPress = {props.home}
              >
            <Image
              style={styles.piquisImage}
              source={require('../../piquis_text.png')}
              />
          </Button>
          </Body>
          <Left></Left>
        </Header>
          <Content style = {styles.content}>
            <Text style = {styles.text}> PROFILE </Text>
            <Text style = {styles.text1}> Marcial Cabrera </Text>
          </Content>
      </Container>
    );
}

export default ProfileV;

const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      backgroundColor: '#F0FFF0',
    },

    header: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 130,
      width: '100%',
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },

    piquisImage: {
        width: 59.5,
        height: 78.75,
    },

    button: {
      paddingTop: 8,
      backgroundColor: 'transparent',
    },

    content: {
      paddingTop: 20,
    },

    text: {
      alignSelf: 'center',
      color: '#324F17',
      fontSize: 40,
    },

    text1: {
      alignSelf: 'center',
      marginTop: 20,
      color: '#324F17',
      fontSize: 40,
    },
  });
