import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginV from './LoginV';
import Profile from '../Profile/Profile';
import CreateAccount from '../SignUp/CreateAccount';

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
        if(this.state.username === "" && this.state.password === ""){
            this.props.navigation.navigate('Home');
        }

    }

    createAccount = () => {
      this.props.navigation.navigate('CreateAccount');
    }

    render(){
        return(
            <LoginV
                username={(username) => this.setState({username})}
                password={(password) => this.setState({password})}
                login={this.loginAction}
                create={this.createAccount}
            />
        );
    }
}
export default Login;
