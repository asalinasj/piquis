import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    Image,
    ImageBackground,
  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import piquis from '../../piquis.jpg';
import piquis_text from '../../piquis_text.png';
import axios from 'axios';

const LoginV = (props) => {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
          <View style={styles.MainContainer}>
              <Image
                style={styles.piquisImage}
                source={require('../../piquis_text.png')}

                />

              <TextInput
                style={styles.textInput} placeholder="Username"
                onChangeText={props.username}
                underlineColorAndroid='transparent'
              />

              <TextInput secureTextEntry={true}
                style={styles.textInput} placeholder="Password"
                onChangeText={props.password}
                underlineColorAndroid='transparent'
              />

              <TouchableOpacity
                style={styles.btn}
                onPress={props.login}>
                <Text style={{color: 'white', fontSize: 25}}>
                  Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn2}
                onPress={props.create}>
                <Text style={{color: 'white', fontSize: 20}}>
                  Create Account</Text>
              </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
    );
}

export default LoginV;

const styles = StyleSheet.create({
    MainContainer: {
      //flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#EFB289',
    },
    wrapper: {
      flex: 1,
    },
    container: {
      flex: 1,
      //alignItems: 'center',
      // justifyContent: 'center',
      // backgroundColor: '#2896d3',
      // paddingLeft: 40,
      // paddingRight: 40,
    },
    header: {
      fontSize: 30,
      marginBottom: 60,
      color: 'gray',
      fontWeight: 'bold',
    },
    piquisImage: {
        width: 170,
        height: 225,
        //resizeMode: "contain",
        alignSelf: 'center',
        marginBottom: 55,
    },
    textInput: {
      alignSelf: 'center',
      padding: 16,
      marginBottom: 20,
      backgroundColor: '#F6DCCA',
      width: '75%',
      borderRadius:10,
    },
    btn: {
      alignSelf: 'center',
      backgroundColor: '#1CA04B',
      padding: 20,
      alignItems: 'center',
      width: '80%',
      borderRadius:10,
      marginBottom: 30,
    },

    btn2: {
      alignSelf: 'center',
      backgroundColor: '#1CA04B',
      padding: 20,
      alignItems: 'center',
      width: '50%',
      borderRadius:10,
    },
  });
