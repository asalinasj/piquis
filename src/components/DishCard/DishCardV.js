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
import Ratings from '../Ratings/Ratings';
import StarRatingC from '../Ratings/StarRatingC';

const DishCardV = (props) => {
    return(
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: 'http://aucdn.ar-cdn.com/recipes/xlarge/default.jpg'}}/>
                <Body>
                    <Text>Restaurant Name</Text>
                    <Text note>{props.text}</Text>
                </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: 'https://www.sanmanuel.com/sites/default/files/featured-images/15587_DIGI_Dining__17_Dining_1440x500.jpg'}} 
                    style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={{height: 65}}>
                <Body>
                    <StarRatingC />
                </Body>
            </CardItem>
        </Card>
    );
}

export default DishCardV;