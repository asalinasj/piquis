import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
    Container,
    Header,
    Left,
    Body,
    Right, Button, Icon, Title,
    Content, Footer, FooterTab, Badge } from 'native-base';
import FooterC from '../Footer/FooterC.js';


const ResultsV = (props) => {
    return(
        <Container>
            <Header>

            </Header>
            <Content>
                <Text>{props.text}</Text>
                <Text>{props.text}</Text>
            </Content>
            <FooterC />
        </Container>
    );
}

export default ResultsV;