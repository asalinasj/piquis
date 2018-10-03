import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ProfileV from './ProfileV.js';
import {
    Container,
    Header,
    Left,
    Body,
    Right, Button, Icon, Title,
    Content, Footer, FooterTab, Badge } from 'native-base';

class Profile extends React.Component{
    render(){
        return(
            <ProfileV />
        );
    }
}
export default Profile;
