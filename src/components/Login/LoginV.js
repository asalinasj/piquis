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
import axios from 'axios';

const LoginV = (props) => {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
          <View style={styles.MainContainer}>
              <Image 
                style={styles.piquisImage}
                source={require('../../piquis.jpg')}

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
                <Text>Log in</Text>
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
      backgroundColor: '#D16928',
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
        width: 150, 
        height: 150, 
        //resizeMode: "contain",
        alignSelf: 'center',
        marginBottom: 20,
    },
    textInput: {
      alignSelf: 'center',
      padding: 16,
      marginBottom: 20,
      backgroundColor: '#fff',
      width: '70%',
    },
    btn: {
      alignSelf: 'center',
      backgroundColor: '#CD5C5C',
      padding: 20,
      alignItems: 'center',
      width: '70%',
    }
  });