import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CreateAccountV from './CreateAccountV.js';
import {
    Container,
    Header,
    Left,
    Body,
    Right, Button, Icon, Title,
    Content, Footer, FooterTab, Badge } from 'native-base';


class CreateAccount extends React.Component{
    render(){
        return(
            <CreateAccountV />
        );
    }
}
export default CreateAccount;
