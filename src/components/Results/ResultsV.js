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
import SearchHeader from '../SearchBar/SearchHeader';
import StarRatingC from '../Ratings/StarRatingC';

const renderCard = () => {
  return (result, index) => {
      console.log(result);
      return (
        <Card key={index}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'http://aucdn.ar-cdn.com/recipes/xlarge/default.jpg'}}/>
              <Body>
                <Text>{result.RestaurantId}</Text>
                <Text note>{result.Name}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'https://www.sanmanuel.com/sites/default/files/featured-images/15587_DIGI_Dining__17_Dining_1440x500.jpg'}} 
              style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              {/* <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 likes</Text>
              </Button> */}
              <StarRatingC rate={result.AverageRating}/>
            </Left>
            <Right>
              <Text>Rating: {result.AverageRating}</Text>
            </Right>
          </CardItem>
        </Card>
      );
  };
};

const ResultsV = (props) => {
    return(
        <Container style={styles.MainContainer}>
            <SearchHeader 
              searchButton = {props.search}
              dataVal = {props.searchText}
            />
            <Content>
                <Text>Results page</Text>
                {props.results.map(renderCard())}
                {/* <DishCard />
                <DishCard /> */}
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