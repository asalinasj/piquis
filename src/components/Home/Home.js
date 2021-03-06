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
import Profile from '../Profile/Profile';
import Results from '../Results/Results';


class Home extends React.Component{
  constructor(props){
    super(props)
    
    state = {
      term: "default",
    }
  }
  
  static navigationOptions = {
    title: 'Welcome',
  };
  profilePage = () => {
    this.props.navigation.navigate('Profile');
  }
  pressSearch = () => {
    if(this.state.term != "default"){
      this.props.navigation.navigate('Results', {term: this.state.term});
      console.log(this.state.term);
    }
    else {
      console.log("Null value");
      this.props.navigation.navigate('Home');
    }
   
  }
  onPressHome = () => {
    this.props.navigation.navigate('Home');
  }
  sendData = (data) => {
    this.setState({term: data});
  }

    render(){
        return(
          <View>
            <HomeV
              profile = {this.profilePage}
              search = {this.pressSearch}
              pressHome={this.onPressHome}
              searchText={this.sendData}

              />
            
          </View>
        );
    }
}
export default Home;
