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
        state = {
            term: ''
        }
    }
    sendData = (data) => {
        this.setState({term: data});
        //this.props.navigation.state.params.term = data;
    }
    printVal = () => {
        console.log(this.props.navigation.state.params.term);
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
    render(){
        return(
            <ResultsV 
                text={this.props.navigation.state.params.term}
                search={this.pressSearch}
                searchText={this.sendData}
            />
        );
    }
}

export default Results;
