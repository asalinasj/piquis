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
    ImageBackground,
  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import profile_icon from '../../../assets/profile_icon.png';
import FooterV from '../Footer/FooterV.js';


const ProfileV = (props) => {
    return (
      <Container style={styles.MainContainer}>
          <Header style = {styles.header}>
            <Left></Left>
              <Title style={styles.headerText}>PROFILE</Title>
            <Right></Right>
          </Header>
            <Content>
                <View>
                    <Text style={styles.userInfo}>Marcial Cabrera</Text>
                </View>
            </Content>
            <FooterV />
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
      height: '100%',
      backgroundColor: '#D16928',
    },

    header: {
      height: 80,
      width: '100%',
      paddingTop: 25,
      paddingBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(43, 132, 82, 0.5)',
      borderBottomWidth: 0,
    },

    headerText: {
      fontSize: 35,
    },

    userInfo: {
      paddingTop: 30,
      fontSize: 20,
    }
  });
