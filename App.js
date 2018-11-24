import React, {Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from './src/reducers';
import {firebaseApp} from './src/utils/db';
import {createStackNavigator,
        createDrawerNavigator,
        createBottomTabNavigator} from 'react-navigation';
//import { MainNavigator } from './routes';
import {Drawer} from './routes';

const store = createStore(combineReducers({
  ...reducers
}))

export default class App extends Component{
  state = {
    sessionChecked: false,
    user: null
  }

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      this.setState({sessionChecked: true, user})
    })
  }

  render(){
    return(
      <Provider store={store}>
        
          <Drawer /> 
        
      </Provider>
    );
  }
}
//AppRegistry.registerComponent('piquis', () => App);


/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
