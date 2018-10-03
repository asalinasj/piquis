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
        <Header style = {{height: 55}}>
          <Left></Left>
          <Body style = {{height: 45}}>
            <Title>PIQUIS</Title>
          </Body>
          <Right />
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
      </Container>
    );
}

export default ProfileV;
