import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginV from './LoginV';
import Profile from '../Profile/Profile';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }
    /*loginUsername = (username) => {
        this.setState({username: username});
    }
    loginPassword = (password) => {
        this.setState({password: password});
    }*/
    loginAction = () => {
        if(this.state.username === "User" && this.state.password === "123"){
            this.props.navigation.navigate('Profile');
        }
        
    }

    render(){
        return(
            <LoginV 
                username={(username) => this.setState({username})}
                password={(password) => this.setState({password})}
                login={this.loginAction}
            />
        );
    }
}
export default Login;