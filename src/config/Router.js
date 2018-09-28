// all routes comes from here

import React, {Component} from 'react'
import {createStackNavigator} from 'react-navigation'
import {LoginScreen, RegisterScreen, WelcomeToAppScreen} from "../screens";

class Router extends Component {

    render() {
        return (
            <LoginStack/>
        )
    }
}

const LoginStack = createStackNavigator({
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: {
                header: null,
            }
        },
        RegisterScreen: {
            screen: RegisterScreen,
            navigationOptions: {
                header: null,
            }

        },
        WelcomeToAppScreen: {
            screen: WelcomeToAppScreen,
            navigationOptions: {
                header: null,
            }

        }
    },
    {
        initialRouteName: 'LoginScreen'
    });

export {Router}