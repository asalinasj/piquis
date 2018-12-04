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

    return (
          <Header style = {styles.header}>
            <Left></Left>
            <Body>
              <Title style={styles.text}>PIQUIS</Title>
              <View>
                <SearchBar
                  pressSearch={props.searchButton}
                  searchDataVal={props.dataVal}
                />
              </View>
            </Body>
            <Right></Right>
          </Header>
    );
}

export default SearchHeader;

const styles = StyleSheet.create({

    header: {
      height: 135,
      width: '100%',
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderBottomWidth: 1.5,
      borderBottomColor: "#D16928"
    },

    piquisImage: {
        width: 59.5,
        height: 78.75,
    },

    text: {
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 32,
      fontWeight: 'bold',
      color: '#D16928',
    },

    button: {
      paddingBottom: 55,
      backgroundColor: 'transparent',
    },

  });
