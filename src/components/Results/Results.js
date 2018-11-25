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
    printVal = () => {
        console.log(this.props.navigation.state.params.term);
    }
    render(){
        return(
            <ResultsV text={this.props.navigation.state.params.term}
            />
        );
    }
}

export default Results;
