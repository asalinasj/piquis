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
import SearchBar from '../SearchBar/SearchBar.js';
import piquis_text from '../../piquis_text.png';



const HomeV = (props) => {

  onPressSearch = term => {
	console.log(term);
  }

    return (
      <Container style={styles.MainContainer}>
        <Header style = {styles.header}>
          <Right></Right>
          <Body>
            <Button
              style = {styles.button}
              onPress = {props.profile}
              >
            <Image
              style={styles.piquisImage}
              source={require('../../piquis_text.png')}
              />
          </Button>
            <SearchBar
            onPressSearch={this.onPressSearch}
            />
          </Body>
          <Left></Left>
        </Header>
          <Content style = {styles.content}>
            <Title style = {styles.text}> TRENDING </Title>
          </Content>
      </Container>
    );
}

export default HomeV;

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
      height: 180,
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
      paddingBottom: 55,
      backgroundColor: 'transparent',
    },

    content: {
      paddingTop: 20,
    },

    text: {
      color: '#324F17',
      fontSize: 40,
    },

  });
