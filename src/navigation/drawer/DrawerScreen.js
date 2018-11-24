import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import {DrawerActions} from 'react-navigation';

class DrawerScreen extends Component {
    navigateToScreen = (route) => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer());
    }

    render(){
        return(
            <View>
                <ScrollView>
                    <View>
                        <View>
                            <Text>
                                Sign Out
                            </Text>
                        </View>
                        <View>
                            <Text>
                                Piquis
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>    
        );
    }
}

DrawerScreen.propTypes = {
    navigation: PropTypes.object
};

export default DrawerScreen;