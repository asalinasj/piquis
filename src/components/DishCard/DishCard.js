import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
    Container,
    Header,
    Left,
    Body,
    Right, Button, Icon, Title,
    Content, Footer, FooterTab, Badge,
    Card, CardItem, Thumbnail    
} from 'native-base';
import DishCardV from './DishCardV';

class DishCard extends React.Component{
    render(){
        return(
            <DishCardV />
        );
    }
}

export default DishCard
