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
import Login from '../Login/Login';


class ProfileV extends React.Component {

  onPressSearch = term => {
	console.log(term);
  }

  homePage = () => {
    this.props.navigation.navigate('Login');
  }

render(){
    return (
      <Container style={styles.MainContainer}>
          <SearchHeader
            home={this.homePage}
            />
          <Content style = {styles.content}>
            <Title style = {styles.text}> TRENDING </Title>
          </Content>
      </Container>
    );
  }
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

    content: {
      paddingTop: 20,
    },

    text: {
      color: '#324F17',
      fontSize: 40,
    },

  });
