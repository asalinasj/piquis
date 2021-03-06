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
import FooterC from '../Footer/FooterC.js';
import DishCard from '../DishCard/DishCard';
import Ratings from '../Ratings/Ratings';

const renderCard = () => {
  return (result, index) => {
      console.log(result);
      return (
        <Card key={index}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/71uzndaHK7L._SY355_.png'}}/>
              <Body>
                <Text>Chilis</Text>
                <Text note>{result.Name}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'https://static.olocdn.net/menu/chilis/42ee64003b744623d43bbf514df8c013.jpg'}} 
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
              <Text>Rating: {result.AverageRating}</Text>
            </Body>
            <Right>
              <Text>1 min ago</Text>
            </Right>
          </CardItem>
        </Card>
      );
  };
};

const ResultsV = (props) => {
    return(
        <Container style={styles.MainContainer}>
            <Header>

            </Header>
            <Content>
                <Text>Results page</Text>
                {props.results.map(renderCard())}
                <DishCard />
                <DishCard />
            </Content>
            <FooterC />
        </Container>
    );
}

export default ResultsV;

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: '#F0FFF0',
    }
})