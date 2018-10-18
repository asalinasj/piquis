import React, { Component } from 'react';
import {
    Container,
    Body, Button, Icon,
    Content, Badge } from 'native-base';
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

export default class SearchBar extends Component {

state = { term: '' };

render (){
    const {
    	containerStyle,
    	searchTextStyle,
    	buttonStyle,
      size,
    } = styles;

    return (
      <View style={containerStyle}>
        <TextInput
          style={searchTextStyle} placeholder="Search"
          value = {this.state.term}
          onChangeText = {term => this.setState ({ term })} // { term }  == { term: term }
        />
        <Button
          style={buttonStyle}
          onPress ={() => this.props.onPressSearch(this.state.term)}
        >
        <Image
          style = {size}
          source={require('../../../assets/search_icon2.png')}
          />
        </Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({

    containerStyle: {
      flexDirection: 'row',
      width: '100%',
    },

    searchTextStyle: {
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: '500',
      backgroundColor: '#ede9e4',
      borderColor: '#324F17',
      borderWidth: 1.5,
      width: 310,
      height: 40,
      borderRadius:10,

    },

    size: {
      height: 40,
      width: 40,
    },

    buttonStyle: {
      paddingLeft: 10,
      paddingBottom: 10,
      marginBottom: 20,
      backgroundColor: 'transparent',
    },

  });
