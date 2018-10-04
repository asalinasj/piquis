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

const ProfileV = (props) => {
    return (
      <Container style={{marginTop: 20}}>
        <View style={styles.MainContainer}>
          <Header style = {{height: 55}}>
            <Left></Left>
            <Body style = {{height: 45}}>
              <Title>PIQUIS</Title>
            </Body>
            <Right></Right>
          </Header>
            <Content>
                <View>
                    <Text>Profile</Text>
                </View>
            </Content>
            <Footer>
              <Left>
                <Button transparent>
                  <Image
                    style = {{height: 38, width: 38}}
                    source={require('../../../assets/profile_icon.png')}
                    />
                </Button>
              </Left>
              <Right></Right>
            </Footer>
          </View>
      </Container>
    );
}

export default ProfileV;

const styles = StyleSheet.create({
    MainContainer: {
      //flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#EFB289',
    },
    wrapper: {
      flex: 1,
    },
    container: {
      flex: 1,
      //alignItems: 'center',
      // justifyContent: 'center',
      // backgroundColor: '#2896d3',
      // paddingLeft: 40,
      // paddingRight: 40,
    },
    header: {
      fontSize: 30,
      marginBottom: 60,
      color: 'gray',
      fontWeight: 'bold',
    },
    profile_icon: {
        width: 170,
        height: 225,
        //resizeMode: "contain",
        alignSelf: 'center',
        marginBottom: 55,
    },
  });
