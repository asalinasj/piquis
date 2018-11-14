import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
    Container,
    Header,
    Left,
    Body,
    Right, Button, Icon, Title,
    Content, Footer, FooterTab, Badge } from 'native-base';
import FooterV from '../Footer/FooterV.js';
import ResultsV from './ResultsV';
import {createStackNavigator} from 'react-navigation';

class Results extends React.Component{
    constructor(props){
        super(props)
    }
    getDishResults = (dishName) => {
      fetch(`https://piquis-api-dot-piquis-220920.appspot.com/api/dish/`)
        .then((response) => response.json())
        .then((jsonResponse) => {
          console.log(jsonResponse);
          return jsonResponse;
        })
        .catch((error) => console.log(`my error: ${error}`));
    }
    render(){
        return(
            <ResultsV text={this.getDishResults(this.props.navigation.state.params.term)}
            />
        );
    }
}

export default Results;
