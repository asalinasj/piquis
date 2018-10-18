import React, {Component} from 'react';
import {
    Header,
    Left,
    Body,
    Right, Button, Title,} from 'native-base';
import {
    StyleSheet,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    Image,
  } from 'react-native';
import SearchBar from './SearchBar.js';
import piquis_text from '../../piquis_text.png';


const SearchHeader = (props) => {

  onPressSearch = term => {
	console.log(term);
  }

    return (
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
              <SearchBar
              onPressSearch={this.onPressSearch}
              />
            </Body>
            <Left></Left>
          </Header>
    );
}

export default SearchHeader;

const styles = StyleSheet.create({

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

  });
