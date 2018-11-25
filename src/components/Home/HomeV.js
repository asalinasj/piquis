import React from 'react';
import {
    Container,
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
import SearchHeader from '../SearchBar/SearchHeader';
import FooterC from '../Footer/FooterC';

const HomeV = (props) => {
    return (
      <Container style={styles.MainContainer}>
        <SearchHeader
          searchButton = {props.search}
          dataVal = {props.searchText}
        />
        <Content style = {styles.content}>
            <Title style = {styles.text}> TRENDING </Title>
        </Content>
        <FooterC
          pressNavHome = {props.pressHome}
         />
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

    piquisImage: {
        width: 59.5,
        height: 78.75,
    },

    content: {
      paddingTop: 10,
    },

    text: {
      color: '#324F17',
      fontSize: 40,
    },

  });
