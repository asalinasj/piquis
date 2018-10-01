import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
            <Container style={{marginTop: 10}}>
                <Header >
                    <Left>Hello</Left>
                    <Right>Menu</Right>
                </Header>
                <Content>
                    <View>
                        <Text>Profile</Text>
                    </View>
                </Content>
                <Footer>

                </Footer>
            </Container>
            
        );
    }
}
export default Profile;