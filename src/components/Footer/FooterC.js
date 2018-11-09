import React from 'react';
import { createStackNavigator } from 'react-navigation';
import FooterV from './FooterV';
import Home from '../Home/Home'
import Profile from '../Profile/Profile';

class FooterC extends React.Component{
    constructor(props){
        super(props)
        state = {

        }
    }

    profilePage = () => {
        this.props.navigation.navigate('Profile');
    }

    navigateHome = () => {
        this.props.navigation.navigate('Home');
    }
    render(){
        return(
            <FooterV 
                home={this.props.pressNavHome}
                navHome = {this.navigateHome}
                navProfile = {this.profilePage}
            />
        );
    }


}

export default FooterC;