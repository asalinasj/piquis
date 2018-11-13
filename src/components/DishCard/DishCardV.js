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

const DishCardV = (props) => {
    return(
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: ''}}/>
                <Body>
                    <Text>Chilis</Text>
                    <Text note>{props.text}</Text>
                </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: ''}} 
                    style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 likes</Text>
                    </Button>
                </Left>
                <Body>
                    <Text>Rate Me</Text>
                </Body>
                <Right>
                    <Text>1 min ago</Text>
                </Right>
            </CardItem>
        </Card>
    );
}

export default DishCardV;